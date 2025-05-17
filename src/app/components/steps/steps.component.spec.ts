import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepsComponent } from './steps.component';
import { By } from '@angular/platform-browser';

describe('StepsComponent', () => {
  let component: StepsComponent;
  let fixture: ComponentFixture<StepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all step labels', () => {
    component.steps = ['CPF', 'Cooperado', 'Confirmação'];
    fixture.detectChanges();

    const stepLabels = fixture.debugElement.queryAll(By.css('.step-label'));
    expect(stepLabels.length).toBe(3);
    expect(stepLabels.map((el) => el.nativeElement.textContent.trim())).toEqual(
      ['CPF', 'Cooperado', 'Confirmação']
    );
  });

  it('should apply "active" class to currentStep', () => {
    component.steps = ['CPF', 'Cooperado', 'Confirmação'];
    component.currentStep = 1;
    fixture.detectChanges();

    const steps = fixture.debugElement.queryAll(By.css('.step'));
    expect(steps[1].nativeElement.classList).toContain('active');
  });

  it('should not apply "active" class to other steps', () => {
    component.steps = ['Etapa 1', 'Etapa 2', 'Etapa 3'];
    component.currentStep = 0;
    fixture.detectChanges();

    const steps = fixture.debugElement.queryAll(By.css('.step'));
    expect(steps[0].nativeElement.classList).toContain('active');
    expect(steps[1].nativeElement.classList).not.toContain('active');
    expect(steps[2].nativeElement.classList).not.toContain('active');
  });
});
