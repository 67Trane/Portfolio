import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../services/global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  constructor(public global: GlobalService) {

  }
}
