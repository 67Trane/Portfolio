import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillsetService } from '../services/skillset.service';
import { PopupComponent } from './popup/popup.component';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../services/global.service';

export interface IconFile {
  name: string;
  file: string;
}

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [CommonModule, PopupComponent, TranslateModule],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {
  iconFiles: IconFile[] = []
  iconFolderPath = '';
  lightMode = '_light';
  isHovered: boolean = false


  constructor(private skillsetService: SkillsetService, public global: GlobalService) {
    this.iconFiles = this.skillsetService.getIconFiles();
    this.iconFolderPath = this.skillsetService.getIconFolderPath();

  }

  hoverPopUp(growth: string) {
    if (growth == "Growth Mindset") {
      this.isHovered = true
    }
  }

  getIconPath(icon: IconFile): string {
    const suffix = this.global.themeMode ? '_light' : '';
    return `${this.iconFolderPath}${icon.file.replace('.svg', '')}${suffix}.svg`;
  }

  closePopUp() {
    this.isHovered = false
  }

}
