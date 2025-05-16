import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FooterConfig } from '../model/footer-config';

@Injectable({ providedIn: 'root' })
export class FooterService {
  private configSubject = new BehaviorSubject<FooterConfig | null>(null);
  config$ = this.configSubject.asObservable();

  set(config: FooterConfig) {
    this.configSubject.next(config);
  }

  clear() {
    this.configSubject.next(null);
  }
}
