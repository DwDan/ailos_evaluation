import { TestBed } from '@angular/core/testing';
import { IdentificationCheckService } from './identification-check.service';
import { take } from 'rxjs/operators';

describe('IdentificationCheckService', () => {
  let service: IdentificationCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificationCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return valid: true for a valid CPF', (done) => {
    const validCpf = '89314829065';

    service
      .check(validCpf)
      .pipe(take(1))
      .subscribe((response) => {
        expect(response.valid).toBeTrue();
        expect(response.name).toBeDefined();
        expect(response.status).toBeDefined();
        done();
      });
  });

  it('should return valid: true for a valid formatted CPF', (done) => {
    const validCpf = '893.148.290-65';

    service
      .check(validCpf)
      .pipe(take(1))
      .subscribe((response) => {
        expect(response.valid).toBeTrue();
        expect(response.name).toBeDefined();
        done();
      });
  });

  it('should return valid: false for an invalid CPF', (done) => {
    const invalidCpf = '12345678900';

    service
      .check(invalidCpf)
      .pipe(take(1))
      .subscribe((response) => {
        expect(response.valid).toBeFalse();
        expect(response.name).toBeUndefined();
        done();
      });
  });

  it('should return valid: false for a repeated CPF', (done) => {
    const invalidCpf = '11111111111';

    service
      .check(invalidCpf)
      .pipe(take(1))
      .subscribe((response) => {
        expect(response.valid).toBeFalse();
        done();
      });
  });

  it('should return valid: false for a CPF with less than 11 digits', (done) => {
    const shortCpf = '123456';

    service
      .check(shortCpf)
      .pipe(take(1))
      .subscribe((response) => {
        expect(response.valid).toBeFalse();
        done();
      });
  });
});
