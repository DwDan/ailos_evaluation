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

  constructor(private fb: FormBuilder) {
    super();

    this.headerService.setTitle('Nova Admissão Cooperado');
    this.headerService.setBreadcrumb([
      'Cadastro',
      'Admissão do Cooperado',
      'Nova Admissão',
    ]);

    this.footerService.set({
      buttons: [
        {
          text: 'Dicas para abertura da conta',
          class: 'btn-outline-primary',
          action: () => console.log('clicado'),
        },
      ],
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
