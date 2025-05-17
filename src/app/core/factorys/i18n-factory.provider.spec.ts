import { TestBed } from '@angular/core/testing';
import { injectI18nLiterals } from './i18n-factory.provider';
import { I18nService } from '../services/i18n.service';

describe('injectI18nLiterals', () => {
  const mockLiterals = {
    pt: { title: 'Página Inicial' },
    en: { title: 'Home Page' },
  };

  let mockI18nService: jasmine.SpyObj<I18nService>;

  beforeEach(() => {
    const i18nSpy = jasmine.createSpyObj('I18nService', ['getLiterals']);

    TestBed.configureTestingModule({
      providers: [{ provide: I18nService, useValue: i18nSpy }],
    });

    mockI18nService = TestBed.inject(
      I18nService
    ) as jasmine.SpyObj<I18nService>;
  });

  it('should return literals from I18nService', () => {
    mockI18nService.getLiterals.and.returnValue(mockLiterals.en);

    const result = TestBed.runInInjectionContext(() =>
      injectI18nLiterals(mockLiterals)
    );

    expect(result.title).toBe('Home Page');
    expect(mockI18nService.getLiterals).toHaveBeenCalledWith(mockLiterals);
  });
});
