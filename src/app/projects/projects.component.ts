import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { ProjectCardComponent } from "./project-card/project-card.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  hoveredIndex: number | null = null;
  picIndex: any = 1
  ismobile: boolean = false;
  isOpenPorject: boolean = false;


  // Für den "Live Tester" muss der Projektname exakt der URL-Endung entsprechen.
  // Beispiel: name = "Da Bubble" → URL = .../da-bubble (Leerzeichen werden automatisch durch "-" ersetzt)

  projects = [
    {
      "name": "Join",
      "tools": ["HTML", "CSS", "Javascript", "Firebase"],
      "picture": "assets/imgs/join.jpeg",
      "description": 'PROJECTCARD.JOIN.INFO',
      "github": "https://github.com/67Trane/join",
    },
    {
      "name": "NightStalker",
      "tools": ["HTML", "CSS", "Javascript"],
      "picture": "assets/imgs/nightstalker.png",
      "description": "PROJECTCARD.NIGHTSTALKER.INFO",
      "github": "https://github.com/67Trane/nightstalker",
    },
    {
      "name": "DA Bubble",
      "tools": ["Angular", "Firebase", "TypeScript"],
      "picture": "assets/imgs/da-bubble.jpeg",
      "description": "PROJECTCARD.DABUBBLE.INFO",
      "github": "https://github.com/67Trane/DABubble",
    },
  ]


  ngOnInit(): void {
    this.onMobile(); // Beim Initialisieren prüfen
  }

  onMouseOver(index: number) {
    this.picIndex = index
    this.hoveredIndex = index;
  }

  onMouseLeave() {
    this.hoveredIndex = null;
  }

  onMobile() {
    this.ismobile = window.innerWidth < 768;
  }

  @HostListener('window:resize')
  onResize() {
    this.onMobile();
  }

  openProject() {
    this.isOpenPorject = true
  }

  handleModalChange(newState: boolean) {
    this.isOpenPorject = newState;
  }

}
