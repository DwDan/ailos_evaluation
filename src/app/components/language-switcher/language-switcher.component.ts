import { Component } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
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

  constructor(private i18n: I18nService) {
    this.currentLanguage = this.i18n.getCurrentLanguage() || 'pt';
  }

  toggleLanguage(): void {
    const newLang = this.currentLanguage === 'pt' ? 'en' : 'pt';
    this.i18n.setLanguage(newLang);
    this.currentLanguage = newLang;
    window.location.reload();
  }
}
