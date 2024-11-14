import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { ProjectCardComponent } from "./project-card/project-card.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  isModalOpen: boolean = false;
  hoveredIndex: number | null = null;
  test: any = 1

  projects = [
    {
      "name": "Join",
      "tools": ["HTML", "CSS", "Javascript", "Firebase"],
      "picture": "assets/imgs/join.jpeg"
    },
    {
      "name": "NightStalker",
      "tools": ["HTML", "CSS", "Javascript"],
      "picture": "assets/imgs/nightstalker.png"
    },
    {
      "name": "DA Bubble",
      "tools": ["Angular", "Firebase", "TypeScript"],
      "picture": "assets/imgs/da-bubble.jpeg"
    },
  ]

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }


  onMouseOver(index: number) {
    this.test = index
    this.hoveredIndex = index;
  }

  onMouseLeave() {
    this.hoveredIndex = null;
  }


}
