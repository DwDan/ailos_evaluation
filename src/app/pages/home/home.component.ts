import { Component } from '@angular/core';
import { PageBase } from '../shared/page.base';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends PageBase {
  constructor() {
    super();
    this.headerService.setTitle('Página inicial');
    this.headerService.setBreadcrumb(['Home']);
  }
}
