import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CpfCheckComponent } from './pages/cpf-check/cpf-check.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'search', component: CpfCheckComponent },
      { path: '**', component: NotFoundComponent },
    ],
  },
];
