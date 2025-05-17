import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent, RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain app-sidebar component', () => {
    const sidebar = fixture.debugElement.query(By.css('app-sidebar'));
    expect(sidebar).toBeTruthy();
  });

  it('should contain app-header component', () => {
    const header = fixture.debugElement.query(By.css('app-header'));
    expect(header).toBeTruthy();
  });

  it('should contain app-footer component', () => {
    const footer = fixture.debugElement.query(By.css('app-footer'));
    expect(footer).toBeTruthy();
  });

  it('should contain router-outlet', () => {
    const outlet = fixture.debugElement.query(By.directive(<any>RouterOutlet));
    expect(outlet).toBeTruthy();
  });
});
