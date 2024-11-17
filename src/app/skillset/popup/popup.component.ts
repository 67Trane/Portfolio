import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  isPopupVisible: boolean = false;

  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }
}
