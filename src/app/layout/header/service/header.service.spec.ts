import { TestBed } from '@angular/core/testing';
import { HeaderService } from './header.service';
import { skip, first } from 'rxjs';

describe('HeaderService', () => {
  let service: HeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit title when setTitle is called', (done) => {
    const mockTitle = 'Página de Teste';

    service.title$.pipe(skip(1), first()).subscribe((title) => {
      expect(title).toBe(mockTitle);
      done();
    });

    service.setTitle(mockTitle);
  });

  it('should emit breadcrumb when setBreadcrumb is called', (done) => {
    const mockBreadcrumb = ['Início', 'Formulário'];

    service.breadcrumb$.pipe(skip(1), first()).subscribe((breadcrumb) => {
      expect(breadcrumb).toEqual(mockBreadcrumb);
      done();
    });

    service.setBreadcrumb(mockBreadcrumb);
  });
});
