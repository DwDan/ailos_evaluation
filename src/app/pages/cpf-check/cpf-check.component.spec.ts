import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfCheckComponent } from './cpf-check.component';

describe('CpfCheckComponent', () => {
  let component: CpfCheckComponent;
  let fixture: ComponentFixture<CpfCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpfCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpfCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
