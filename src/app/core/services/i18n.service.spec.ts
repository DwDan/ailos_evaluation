import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';
import { LanguageType } from '../types/language.type';

describe('I18nService', () => {
  let service: I18nService;
  const storageKey = 'selectedLanguage';

  beforeEach(() => {
    localStorage.clear(); 
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to "pt" if no language is set in localStorage', () => {
    expect(service.getCurrentLanguage()).toBe('pt');
  });

  it('should initialize from localStorage if value exists', () => {
    localStorage.setItem(storageKey, 'en');
    const reinitializedService = new I18nService();
    expect(reinitializedService.getCurrentLanguage()).toBe('en');
  });

  it('should change language and persist to localStorage', () => {
    service.setLanguage('en');
    expect(service.getCurrentLanguage()).toBe('en');
    expect(localStorage.getItem(storageKey)).toBe('en');
  });

  it('should return correct literals for current language', () => {
    const literals = {
      pt: { greeting: 'Olá' },
      en: { greeting: 'Hello' },
    };

    service.setLanguage('en');
    const result = service.getLiterals(literals);
    expect(result.greeting).toBe('Hello');

    service.setLanguage('pt');
    const resultPt = service.getLiterals(literals);
    expect(resultPt.greeting).toBe('Olá');
  });

  it('should fallback to pt if language not found in literals', () => {
    const literals = {
      pt: { msg: 'Mensagem padrão' },
    };

    service.setLanguage('fr' as LanguageType);
    const result = service.getLiterals(literals);
    expect(result.msg).toBe('Mensagem padrão');
  });
});
