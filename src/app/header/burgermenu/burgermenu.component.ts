import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-burgermenu',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './burgermenu.component.html',
  styleUrl: './burgermenu.component.scss'
})
export class BurgermenuComponent {
  @Input() burgerMenuChecked: any;
  @Output() burgerMenuCheckedChange: EventEmitter<boolean> = new EventEmitter();

  toggleChecked(event: Event): void {
    this.burgerMenuChecked = (event.target as HTMLInputElement).checked; 
    this.burgerMenuCheckedChange.emit(this.burgerMenuChecked); 
  }
}
