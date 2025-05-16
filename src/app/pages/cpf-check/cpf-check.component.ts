import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StepsComponent } from '../../components/steps/steps.component';
import { PageBase } from '../shared/page.base';
import { injectI18nLiterals } from '../../core/factorys/i18n-factory.provider';
import { cpfCheckI18n } from './i18n/cpf-check.i18n';

@Component({
  selector: 'app-cpf-check',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, StepsComponent],
  templateUrl: './cpf-check.component.html',
  styleUrl: './cpf-check.component.scss',
})
export class CpfCheckComponent extends PageBase {
  form: FormGroup;
  showResult = false;
  literals = injectI18nLiterals(cpfCheckI18n);

  constructor(private fb: FormBuilder) {
    super();

  this.headerService.setTitle(this.literals.page);
  this.headerService.setBreadcrumb(this.literals.breadcrumb.slice());

  this.footerService.set({
    buttons: this.literals.footer.buttons.map(btn => ({
      ...btn,
      action: () => console.log('clicado')
    }))
  });

    this.form = this.fb.group({
      cpf: ['', [Validators.required]],
    });
  }

  consultarCPF(): void {
    if (this.form.valid) {
      this.showResult = true;
    }
  }
}
