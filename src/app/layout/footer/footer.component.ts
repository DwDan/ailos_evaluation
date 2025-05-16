import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterService } from './service/footer.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public footer: FooterService) {}
}
