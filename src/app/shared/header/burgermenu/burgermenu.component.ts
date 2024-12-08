import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GlobalService } from '../../../services/global.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-burgermenu',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './burgermenu.component.html',
  styleUrl: './burgermenu.component.scss'
})
export class BurgermenuComponent {

  constructor(public global: GlobalService, private translate: TranslateService) { }

  isChecked: boolean = false;
  lang = 'en'
  modeChecked = false;
  @Input() burgerMenuChecked: any;
  @Output() burgerMenuCheckedChange: EventEmitter<boolean> = new EventEmitter();

  toggleChecked(event: Event): void {
    this.burgerMenuChecked = (event.target as HTMLInputElement).checked;
    this.burgerMenuCheckedChange.emit(this.burgerMenuChecked);
  }

  switchTheme(event: Event) {
    this.modeChecked = (event.target as HTMLInputElement).checked;
    this.modeChecked = this.global.themeMode
    if (this.modeChecked) {
      this.global.themeMode = false
    } else {
      this.global.themeMode = true
    }
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
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }


  closeBurgerMenu() {
    this.global.burgermenuIsOpen = false;
  }
}
