import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HeaderService } from './service/header.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockHeaderService: jasmine.SpyObj<HeaderService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj(
      'HeaderService',
      ['setTitle', 'setBreadcrumb'],
      {
        title$: of('Título Teste'),
        breadcrumb$: of(['Home', 'Página Atual']),
      }
    );

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [{ provide: HeaderService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    mockHeaderService = TestBed.inject(
      HeaderService
    ) as jasmine.SpyObj<HeaderService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title from the service', () => {
    const h5 = fixture.debugElement.query(By.css('h5'));
    expect(h5).withContext('Título <h5> não foi renderizado').toBeTruthy();
    expect(h5.nativeElement.textContent).toContain('Título Teste');
  });

  it('should render breadcrumbs from the service', () => {
    const breadcrumb = fixture.debugElement.query(By.css('small.text-muted'));
    expect(breadcrumb).toBeTruthy();
    expect(breadcrumb.nativeElement.textContent).toContain(
      'Home / Página Atual'
    );
  });

  it('should contain the language switcher component', () => {
    const languageSwitcher = fixture.debugElement.query(
      By.css('app-language-switcher')
    );
    expect(languageSwitcher).toBeTruthy();
  });
});
