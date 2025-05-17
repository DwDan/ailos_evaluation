import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { IdentificationCheckComponent } from './identification-check.component';
import { IdentificationCheckService } from './services/identification-check.service';
import { of } from 'rxjs';

describe('IdentificationCheckComponent', () => {
  let component: IdentificationCheckComponent;
  let fixture: ComponentFixture<IdentificationCheckComponent>;
  let mockService: jasmine.SpyObj<IdentificationCheckService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('IdentificationCheckService', ['check']);

    await TestBed.configureTestingModule({
      imports: [IdentificationCheckComponent],
      providers: [{ provide: IdentificationCheckService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(IdentificationCheckComponent);
    component = fixture.componentInstance;
    mockService = TestBed.inject(
      IdentificationCheckService
    ) as jasmine.SpyObj<IdentificationCheckService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not call check service if form is invalid', () => {
    component.form.controls['identification'].setValue('');
    component.checkIdentification();
    expect(mockService.check).not.toHaveBeenCalled();
  });

  it('should call service and update identificationStatus on valid CPF', fakeAsync(() => {
    const validCPF = '89314829065';
    const response = { valid: true, name: 'Test User', status: 'Regular' };

    mockService.check.and.returnValue(of(response));
    component.form.controls['identification'].setValue(validCPF);
    spyOn(component, 'setFooterButtons');

    component.checkIdentification();
    tick(1000);

    expect(mockService.check).toHaveBeenCalledWith(validCPF);
    expect(component.identificationStatus).toEqual(response);
    expect(component.setFooterButtons).toHaveBeenCalledWith(true);
  }));

  it('should show alert when CPF is invalid', fakeAsync(() => {
    const invalidCPF = '12345678900';
    const response = { valid: false };

    mockService.check.and.returnValue(of(response));
    component.form.controls['identification'].setValue(invalidCPF);
    spyOn(window, 'alert');
    spyOn(component, 'setFooterButtons');

    component.checkIdentification();
    tick(1000);

    expect(mockService.check).toHaveBeenCalledWith(invalidCPF);
    expect(window.alert).toHaveBeenCalledWith(
      component.literals.cpfErrorValidation
    );
    expect(component.setFooterButtons).toHaveBeenCalledWith(false);
  }));
});
