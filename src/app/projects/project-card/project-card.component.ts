import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { SkillsetService } from '../../services/skillset.service';
import { IconFile } from '../../skillset/skillset.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent implements OnInit {
  iconFiles: IconFile[] = []
  iconFolderPath: string
  matchingIcons: any



  @Input() isModalOpen: boolean = true
  @Input() projectIndex: number = 1
  @Input() projects: any
  @Output() isModalOpenChange = new EventEmitter<boolean>();


  constructor(private skillsetService: SkillsetService) {
    // Daten aus dem Service abrufen
    this.iconFiles = this.skillsetService.getIconFiles();
    this.iconFolderPath = this.skillsetService.getIconFolderPath();
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
    this.isModalOpenChange.emit(this.isModalOpen); // Signal an den Parent
  }

  ngOnInit(): void {
    this.findMatchingIcons()
  }

  findMatchingIcons(){
    this.matchingIcons = this.projects[this.projectIndex].tools.map((tool: any) =>
      this.iconFiles.find((icon) => icon.name.toLowerCase() === tool.toLowerCase())
    );
  }

  nextProject() {
    this.projectIndex = (this.projectIndex + 1) % this.projects.length;
    this.findMatchingIcons()
  }

  navigateToProject() {
    let projectname = this.projects[this.projectIndex].name.toLowerCase().split("(")
    window.open(`https://mehmet-deliaci.net/${projectname[0]}`, '_target');
  }

  openGithub() {
    let githublink = this.projects[this.projectIndex].github
    window.open(`${githublink}`, '_target');
  }
}
