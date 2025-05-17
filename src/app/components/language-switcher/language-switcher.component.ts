// language-switcher.component.ts
import { Component } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { WindowRef } from '../../core/services/window-ref.service';
import { LanguageType } from '../../core/types/language.type';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  currentLanguage: LanguageType;

  constructor(private i18n: I18nService, private windowRef: WindowRef) {
    this.currentLanguage = this.i18n.getCurrentLanguage() || 'pt';
  }

  toggleLanguage(): void {
    const newLang = this.currentLanguage === 'pt' ? 'en' : 'pt';
    this.i18n.setLanguage(newLang);
    this.currentLanguage = newLang;
    this.windowRef.nativeWindow.location.reload();
  }
}
