import { inject } from '@angular/core';
import { FooterService } from '../../layout/footer/service/footer.service';
import { HeaderService } from '../../layout/header/service/header.service';

export abstract class PageBase {
  protected headerService = inject(HeaderService);
  protected footerService = inject(FooterService);

  constructor() {
    this.headerService.setTitle('');
    this.headerService.setBreadcrumb([]);
    this.footerService.clear();
  }
}
