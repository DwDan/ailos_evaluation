import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdentificationCheckComponent } from './identification-check.component';

describe('IdentificationCheckComponent', () => {
  let component: IdentificationCheckComponent;
  let fixture: ComponentFixture<IdentificationCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentificationCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentificationCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
