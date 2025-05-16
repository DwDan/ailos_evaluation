import { Component } from '@angular/core';
import { PageBase } from '../shared/page.base';
import { RouterModule } from '@angular/router';
import { injectI18nLiterals } from '../../core/factorys/i18n-factory.provider';
import { notFoundI18n } from './i18n/not-found.i18n';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent extends PageBase {
  literals = injectI18nLiterals(notFoundI18n);

  constructor() {
    super();
  this.headerService.setTitle(this.literals.page);
  this.headerService.setBreadcrumb(this.literals.breadcrumb.slice());  }
}
