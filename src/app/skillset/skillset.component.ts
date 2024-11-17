import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillsetService } from '../services/skillset.service';
import { PopupComponent } from './popup/popup.component';

export interface IconFile {
  name: string;
  file: string;
}

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [CommonModule, PopupComponent],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {
  iconFiles: IconFile[] = []
  iconFolderPath = '';
  isHovered: boolean = false


  constructor(private skillsetService: SkillsetService) {
    // Daten aus dem Service abrufen
    this.iconFiles = this.skillsetService.getIconFiles();
    this.iconFolderPath = this.skillsetService.getIconFolderPath();
  }

  hoverPopUp(growth: string) {
    if (growth == "Growth Mindset") {
      this.isHovered = true
    }
  }

  closePopUp() {
    this.isHovered = false
  }

}
