import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isChecked: boolean = false;
  lang = 'en'

  hovered: boolean = false

  constructor(private translate: TranslateService) {
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
    this.hovered = true
  }

  hoverOff() {
    this.hovered = false
  }
}
