import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdentificationStatus } from '../models/identification-status.model';

@Injectable({
  providedIn: 'root',
})
export class IdentificationCheckService {
  constructor() {}

  mockIdentification: IdentificationStatus = {
    name: 'Mariane de Sousa Oliveira',
    status: 'Regular',
    valid: true,
  };

  public check(identification: string): Observable<IdentificationStatus> {
    return new Observable((observer) => {
      setTimeout(() => {
        if (this.validateCPF(identification)) {
          observer.next({ ...this.mockIdentification, identification });
        } else {
          observer.next({ valid: false });
        }

        observer.complete();
      }, 1000);
    });
  }

  private validateCPF(cpf: string): boolean {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
      return false;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf[i]) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf[9])) {
      return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf[i]) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf[10])) {
      return false;
    }

    return true;
  }
}
