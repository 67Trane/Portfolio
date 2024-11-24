import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { BurgermenuComponent } from "./burgermenu/burgermenu.component";


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, BurgermenuComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  burgerMenu: boolean = false;
  isChecked: boolean = false;
  lang = 'en'

  hovered: boolean = false

  constructor(private translate: TranslateService) {
  }

  onBurgerMenuCheckedChange(checked: boolean): void {
    this.isChecked = checked;
    this.lang = checked ? 'de' : 'en';
    this.switchLanguage(this.lang);
  }

  onCheckboxChange(event: Event): void {
    this.isChecked = (event.target as HTMLInputElement).checked;
    if(this.isChecked) {
      this.lang ='de'
    } else {
      this.lang = 'en'
    }
    this.switchLanguage(this.lang)
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  hoverOn() {
    this.hovered = true;
  }

  hoverOff() {
    this.hovered = false
  }

  openBurgerMenu() {
    this.burgerMenu = true;
    document.body.classList.toggle('overflow-hidden', this.burgerMenu);
  }

  closeBurgerMenu() {
    this.burgerMenu = false;
    document.body.classList.toggle('overflow-hidden', this.burgerMenu);
  }
}
