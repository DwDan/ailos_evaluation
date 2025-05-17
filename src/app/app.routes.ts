import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { IdentificationCheckComponent } from './pages/identification-check/identification-check.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'search', component: IdentificationCheckComponent },
      { path: '**', component: NotFoundComponent },
    ],
  },
];
