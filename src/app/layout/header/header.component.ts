import { Component } from '@angular/core';
import { HeaderService } from './service/header.service';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from "../../components/language-switcher/language-switcher.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LanguageSwitcherComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public headerService: HeaderService) {}
}
