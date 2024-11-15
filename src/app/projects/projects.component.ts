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
      "picture": "assets/imgs/join.jpeg"
    },
    {
      "name": "NightStalker (Game)",
      "tools": ["HTML", "CSS", "Javascript"],
      "picture": "assets/imgs/nightstalker.png"
    },
    {
      "name": "DA Bubble (Buessniss App)",
      "tools": ["Angular", "Firebase", "TypeScript"],
      "picture": "assets/imgs/da-bubble.jpeg"
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
