import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  isModalOpen: boolean = false;

  projects= [
    {
      "name": "Join",
      "tools": ["HTML", "CSS", "Javascript", "Firebase"]
    },
    {
      "name": "NightStalker",
      "tools": ["HTML", "CSS", "Javascript"]
    },
    {
      "name": "DA Bubble",
      "tools": ["Angular", "Firebase", "TypeScript"]
    },
  ]

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  

  
}
