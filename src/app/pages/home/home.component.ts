import { Component } from '@angular/core';
import { PageBase } from '../shared/page.base';
import { RouterModule } from '@angular/router';
import { homeI18n } from './i18n/home.i18n';
import { injectI18nLiterals } from '../../core/factorys/i18n-factory.provider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends PageBase {
  literals = injectI18nLiterals(homeI18n);

  constructor() {
    super();
    this.headerService.setTitle(this.literals.page);
    this.headerService.setBreadcrumb(this.literals.breadcrumb.slice());
  }
}
