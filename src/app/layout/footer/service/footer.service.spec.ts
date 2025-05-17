import { TestBed } from '@angular/core/testing';
import { FooterService } from './footer.service';
import { FooterConfig } from '../model/footer-config';
import { first, skip } from 'rxjs';

describe('FooterService', () => {
  let service: FooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit new footer config when set is called', (done) => {
    const mockConfig: FooterConfig = {
      buttons: [{ text: 'Avançar', action: jasmine.createSpy('advance') }],
    };

    service.config$.pipe(skip(1), first()).subscribe((config) => {
      expect(config).toEqual(mockConfig);
      done();
    });

    service.set(mockConfig);
  });

  it('should emit null when clear is called', (done) => {
    service.clear();

    service.config$.pipe(first()).subscribe((config) => {
      expect(config).toBeNull();
      done();
    });
  });
});
