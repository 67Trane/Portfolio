import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BurgermenuComponent } from '../../hero/burgermenu/burgermenu.component';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BurgermenuComponent, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private translate: TranslateService, public global: GlobalService) {

  }

  modeChecked = false;
  isChecked: boolean = false;
  burgerMenu: boolean = false;
  lang = 'en'
  hovered: boolean = false


  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  openBurgerMenu() {
    this.burgerMenu = true;
    document.body.classList.toggle('overflow-hidden', this.burgerMenu);
  }

  closeBurgerMenu() {
    this.burgerMenu = false;
    document.body.classList.toggle('overflow-hidden', this.burgerMenu);
  }


  hoverOn() {
    this.hovered = true;
  }

  onBurgerMenuCheckedChange(checked: boolean): void {
    this.isChecked = checked;
    this.lang = checked ? 'de' : 'en';
    this.switchLanguage(this.lang);
  }

  onCheckboxChange(event: Event): void {
    this.isChecked = (event.target as HTMLInputElement).checked;
    if (this.isChecked) {
      this.lang = 'de'
    } else {
      this.lang = 'en'
    }
    this.switchLanguage(this.lang)
  }

  switchTheme(event: Event) {
    this.modeChecked = (event.target as HTMLInputElement).checked;
    if (this.modeChecked) {
      this.global.themeMode = true
    } else {
      this.global.themeMode = false
    }
  }

  hoverOff() {
    this.hovered = false
  }

}
