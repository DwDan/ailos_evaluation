import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {
  form: FormGroup;
  showResult = false;

  constructor(private fb: FormBuilder) {
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
