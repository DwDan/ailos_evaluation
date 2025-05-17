import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CpfMaskDirective } from './cpf-mask.directive';

@Component({
  template: `<input [formControl]="cpf" cpfMask />`,
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CpfMaskDirective],
})
class TestHostComponent {
  cpf = new FormControl('');
}

describe('CpfMaskDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let input: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    input = fixture.debugElement.query(By.css('input')).nativeElement;
    fixture.detectChanges();
  });

  function setInputValue(value: string) {
    input.value = value;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  }

  it('should create the host component with the directive', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should format CPF with 11 digits correctly', () => {
    setInputValue('12345678901');
    expect(input.value).toBe('123.456.789-01');
  });

  it('should format CPF with 9 digits', () => {
    setInputValue('123456789');
    expect(input.value).toBe('123.456.789');
  });

  it('should format CPF with 6 digits', () => {
    setInputValue('123456');
    expect(input.value).toBe('123.456');
  });

  it('should format CPF with 3 digits', () => {
    setInputValue('123');
    expect(input.value).toBe('123');
  });

  it('should ignore non-digit characters and limit to 11 digits', () => {
    setInputValue('abc123.456!789-01xx');
    expect(input.value).toBe('123.456.789-01');
  });
});
