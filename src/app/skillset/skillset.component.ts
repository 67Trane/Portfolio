import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {
  iconFiles = [
    {
      "name": "Angular",
      "file": "Angular.svg"
    },
    {
      "name": "API",
      "file": "Api.svg"
    },
    {
      "name": "CSS",
      "file": "css.svg"
    },
    {
      "name": "Firebase",
      "file": "Firebase.svg"
    },
    {
      "name": "Framework",
      "file": "Frame.svg"
    },
    {
      "name": "Git",
      "file": "git.svg"
    },
    {
      "name": "HTML",
      "file": "html.svg"
    },
    {
      "name": "JavaScript",
      "file": "Javascript.svg"
    },
    {
      "name": "Scrum",
      "file": "scrum.svg"
    },
    {
      "name": "TypeScript",
      "file": "typescript.svg"
    },
    {
      "name": "Python",
      "file": "python.svg"
    },
    {
      "name": "Growth Mindset",
      "file": "growthmindset.svg"
    },

  ]


  iconFolderPath = '/assets/icons/skillset-icons/'

}
