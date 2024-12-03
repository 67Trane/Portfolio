import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-burgermenu',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './burgermenu.component.html',
  styleUrl: './burgermenu.component.scss'
})
export class BurgermenuComponent {

  constructor(public global: GlobalService){}

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
}
