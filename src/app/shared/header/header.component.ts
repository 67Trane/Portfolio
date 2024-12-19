import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { BurgermenuComponent } from './burgermenu/burgermenu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, BurgermenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService, public global: GlobalService) {

  }

  modeChecked = false;
  isChecked: boolean = false;
  burgerMenu: boolean = false;
  lang = 'en'
  hovered: boolean = false

  ngOnInit(): void {
    if (this.global.languageDe) {
      this.switchLanguage('de')
    } else {
      this.switchLanguage('en')
    }
  }


  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  openBurgerMenu() {
    this.global.burgermenuIsOpen = true;
    document.body.classList.toggle('overflow-hidden', this.burgerMenu);
  }

  closeBurgerMenu() {
    this.global.burgermenuIsOpen = false;
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
      this.global.languageDe = true
      this.lang = 'de'
    } else {
      this.global.languageDe = false
      this.lang = 'en'
    }
    this.switchLanguage(this.lang)
    this.saveLanguage()
  }

  switchTheme(event: Event) {
    this.modeChecked = (event.target as HTMLInputElement).checked;
    if (this.modeChecked) {
      this.global.themeMode = true
    } else {
      this.global.themeMode = false
    }
    this.saveTheme()
  }

  hoverOff() {
    this.hovered = false
  }

  saveLanguage() {
    localStorage.setItem('lang', this.global.languageDe.toString())
  }

  saveTheme() {
    localStorage.setItem('theme', this.global.themeMode.toString())
  }

}
