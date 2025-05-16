import { inject } from '@angular/core';
import { I18nService } from '../services/i18n.service';

export function injectI18nLiterals<T extends Record<string, any>>(
  literals: T
): T[keyof T] {
  const i18nService = inject(I18nService);
  return i18nService.getLiterals(literals);
}
