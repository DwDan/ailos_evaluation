import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  private titleSubject = new BehaviorSubject<string>('');
  private breadcrumbSubject = new BehaviorSubject<string[]>([]);

  title$ = this.titleSubject.asObservable();
  breadcrumb$ = this.breadcrumbSubject.asObservable();

  setTitle(title: string) {
    this.titleSubject.next(title);
  }

  setBreadcrumb(breadcrumb: string[]) {
    this.breadcrumbSubject.next(breadcrumb);
  }
}
