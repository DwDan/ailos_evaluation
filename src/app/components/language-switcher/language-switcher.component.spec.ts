import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageSwitcherComponent } from './language-switcher.component';
import { I18nService } from '../../core/services/i18n.service';
import { WindowRef } from '../../core/services/window-ref.service';

describe('LanguageSwitcherComponent', () => {
  let component: LanguageSwitcherComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;
  let mockI18nService: jasmine.SpyObj<I18nService>;
  let mockWindowRef: jasmine.SpyObj<WindowRef>;

  beforeEach(async () => {
    mockI18nService = jasmine.createSpyObj<I18nService>('I18nService', [
      'getCurrentLanguage',
      'setLanguage',
    ]);

    mockWindowRef = jasmine.createSpyObj('WindowRef', [], {
      nativeWindow: {
        location: {
          reload: jasmine.createSpy('reload')
        }
      }
    });

    await TestBed.configureTestingModule({
      imports: [LanguageSwitcherComponent],
      providers: [
        { provide: I18nService, useValue: mockI18nService },
        { provide: WindowRef, useValue: mockWindowRef },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    mockI18nService.getCurrentLanguage.and.returnValue('pt');
    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should initialize with language from I18nService', () => {
    mockI18nService.getCurrentLanguage.and.returnValue('en');
    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.currentLanguage).toBe('en');
  });

  it('should toggle language from pt to en and reload window', () => {
    mockI18nService.getCurrentLanguage.and.returnValue('pt');
    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.toggleLanguage();

    expect(component.currentLanguage).toBe('en');
    expect(mockI18nService.setLanguage).toHaveBeenCalledWith('en');
    expect(mockWindowRef.nativeWindow.location.reload).toHaveBeenCalled();
  });

  it('should toggle language from en to pt and reload window', () => {
    mockI18nService.getCurrentLanguage.and.returnValue('en');
    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.toggleLanguage();

    expect(component.currentLanguage).toBe('pt');
    expect(mockI18nService.setLanguage).toHaveBeenCalledWith('pt');
    expect(mockWindowRef.nativeWindow.location.reload).toHaveBeenCalled();
  });
});
