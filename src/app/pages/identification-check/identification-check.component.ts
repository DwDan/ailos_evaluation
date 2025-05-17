import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StepsComponent } from '../../components/steps/steps.component';
import { PageBase } from '../shared/page.base';
import { injectI18nLiterals } from '../../core/factorys/i18n-factory.provider';
import { IdentificationCheckService } from './services/identification-check.service';
import { IdentificationStatus } from './models/identification-status.model';
import { identificationCheckI18n } from './i18n/identification-check.i18n';
import { CpfMaskDirective } from '../../core/directives/cpf-mask.directive';

@Component({
  selector: 'app-identification-check',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StepsComponent,
    CpfMaskDirective,
  ],
  templateUrl: './identification-check.component.html',
  styleUrl: './identification-check.component.scss',
})
export class IdentificationCheckComponent extends PageBase {
  form: FormGroup;
  identificationStatus?: IdentificationStatus;
  literals = injectI18nLiterals(identificationCheckI18n);
  identificationCheckService = inject(IdentificationCheckService);

  constructor(private fb: FormBuilder) {
    super();

    this.headerService.setTitle(this.literals.page);
    this.headerService.setBreadcrumb(this.literals.breadcrumb.slice());
    this.setFooterButtons(false);

    this.form = this.fb.group({
      identification: ['', [Validators.required]],
    });
  }

  checkIdentification(): void {
    if (this.form.valid) {
      this.identificationCheckService
        .check(this.form.value.identification)
        .subscribe({
          next: (result) => {
            this.identificationStatus = result;
            this.form.reset();
            this.setFooterButtons(result.valid);
          },
        });
    }
  }

  setFooterButtons(identificationValid: boolean): void {
    if (identificationValid) {
      this.footerService.set({
        buttons: [
          { ...this.literals.footer.newAdmission, action: () => {} },
          { ...this.literals.footer.tipButton, action: () => {} },
        ],
      });
    } else {
      this.footerService.set({
        buttons: [{ ...this.literals.footer.tipButton, action: () => {} }],
      });
    }
  }
}
