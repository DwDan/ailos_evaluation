import { Component } from '@angular/core';
import { PageBase } from '../shared/page.base';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent extends PageBase {
  constructor() {
    super();
    this.headerService.setTitle('Página não encontrada');
    this.headerService.setBreadcrumb(['Not Found']);
  }
}
