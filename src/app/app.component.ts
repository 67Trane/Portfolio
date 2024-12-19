import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from "./shared/header/header.component";
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TranslateModule, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  mouseX: number = 0;
  mouseY: number = 0;
  constructor(public global: GlobalService) { }

  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;  // X-Position relativ zum Fenster
    this.mouseY = event.clientY;  // Y-Position relativ zum Fenster
  }


  closeBurgerMenu() {
    this.global.burgermenuIsOpen = false;
  }


  ngOnInit(): void {
    this.loadData()
  }


  loadData() {
    this.global.languageDe = localStorage.getItem('lang') === 'true' || false; // Standardwert: false
    this.global.themeMode = localStorage.getItem('theme') === 'true' || false; // Standardwert: false
  }
  
}
