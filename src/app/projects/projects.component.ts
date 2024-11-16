import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { ProjectCardComponent } from "./project-card/project-card.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  hoveredIndex: number | null = null;
  picIndex: any = 1
  ismobile: boolean = false;
  isOpenPorject: boolean = false;

  projects = [
    {
      "name": "Join (Kanban Board)",
      "tools": ["HTML", "CSS", "Javascript", "Firebase"],
      "picture": "assets/imgs/join.jpeg",
      "description": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    },
    {
      "name": "NightStalker (Game)",
      "tools": ["HTML", "CSS", "Javascript"],
      "picture": "assets/imgs/nightstalker.png",
      "description": "Jump, run and throw game based on object-oriented approach. Help NightStalker to find coins and molotoves to fight against the gaint skull",
    },
    {
      "name": "DA Bubble (Buessniss App)",
      "tools": ["Angular", "Firebase", "TypeScript"],
      "picture": "assets/imgs/da-bubble.jpeg",
      "description": "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
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
