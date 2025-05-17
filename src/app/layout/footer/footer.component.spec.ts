import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { FooterService } from './service/footer.service';
import { FooterConfig } from './model/footer-config';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let footerService: FooterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    footerService = component.footer;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer buttons from config', () => {
    const action1 = jasmine.createSpy('action1');
    const action2 = jasmine.createSpy('action2');

    const mockConfig: FooterConfig = {
      buttons: [
        { text: 'Salvar', action: action1 },
        { text: 'Cancelar', action: action2 },
      ],
    };

    footerService.set(mockConfig);
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(2);
    expect(buttons[0].nativeElement.textContent).toContain('Salvar');
    expect(buttons[1].nativeElement.textContent).toContain('Cancelar');
  });

  it('should call button action when clicked', () => {
    const actionSpy = jasmine.createSpy('actionSpy');

    const mockConfig: FooterConfig = {
      buttons: [{ text: 'Executar', action: actionSpy }],
    };

    footerService.set(mockConfig);
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click');
    expect(actionSpy).toHaveBeenCalled();
  });
});
