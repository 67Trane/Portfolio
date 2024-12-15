import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

  constructor(public global: GlobalService) {
    
  }
}
