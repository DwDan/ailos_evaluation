import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LanguageType } from '../types/language.type';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private storageKey = 'selectedLanguage'; 
  private currentLanguage = new BehaviorSubject<LanguageType>(
    (localStorage.getItem(this.storageKey) as LanguageType) || 'pt' 
  );

  language$ = this.currentLanguage.asObservable();

  setLanguage(lang: LanguageType) {
    this.currentLanguage.next(lang);
    localStorage.setItem(this.storageKey, lang); 
  }

  getCurrentLanguage(): LanguageType {
    return this.currentLanguage.getValue();
  }

  getLiterals<T extends Record<string, any>>(literals: T): T[keyof T] {
    return literals[this.getCurrentLanguage()] || literals['pt'];
  }
}
