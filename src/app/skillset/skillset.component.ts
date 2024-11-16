import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillsetService } from '../services/skillset.service';

export interface IconFile {
  name: string;
  file: string;
}

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {
  iconFiles: IconFile[] = []
  iconFolderPath = '';

  constructor(private skillsetService: SkillsetService) {
    // Daten aus dem Service abrufen
    this.iconFiles = this.skillsetService.getIconFiles();
    this.iconFolderPath = this.skillsetService.getIconFolderPath();
  }


}
