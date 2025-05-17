import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render logo image', () => {
    const img = fixture.debugElement.query(By.css('img'));
    expect(img).toBeTruthy();
    expect(img.nativeElement.getAttribute('src')).toBe('assets/logo.webp');
    expect(img.nativeElement.getAttribute('alt')).toBe('Logo');
  });

  it('should render 6 navigation links with routerLink', () => {
    const links = fixture.debugElement.queryAll(By.css('a[routerLink]'));
    expect(links.length).toBe(6);

    const expectedRoutes = [
      '/',
      '/search',
      '/star',
      '/chat',
      '/sliders',
      '/bank',
    ];
    links.forEach((link, index) => {
      expect(link.attributes['ng-reflect-router-link']).toBe(
        expectedRoutes[index]
      );
    });
  });

  it('should render icons inside links', () => {
    const icons = fixture.debugElement.queryAll(By.css('a i'));
    expect(icons.length).toBe(6);
    expect(icons[0].nativeElement.classList).toContain('bi-list');
    expect(icons[1].nativeElement.classList).toContain('bi-search');
    expect(icons[2].nativeElement.classList).toContain('bi-star');
    expect(icons[3].nativeElement.classList).toContain('bi-chat-dots');
    expect(icons[4].nativeElement.classList).toContain('bi-sliders');
    expect(icons[5].nativeElement.classList).toContain('bi-bank');
  });
});
