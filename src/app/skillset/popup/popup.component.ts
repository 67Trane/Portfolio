import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  isPopupVisible: boolean = false;


  constructor(public global:GlobalService) {
  }

  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }
}
