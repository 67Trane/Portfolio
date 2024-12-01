import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsetService {
  


  iconFiles = [
    { name: "Angular", file: "Angular.svg" },
    { name: "API", file: "Api.svg" },
    { name: "CSS", file: "css.svg" },
    { name: "Firebase", file: "Firebase.svg" },
    { name: "Material Design", file: "Frame.svg" },
    { name: "Git", file: "git.svg" },
    { name: "HTML", file: "html.svg" },
    { name: "JavaScript", file: "Javascript.svg" },
    { name: "Scrum", file: "scrum.svg" },
    { name: "TypeScript", file: "typescript.svg" },
    { name: "Python", file: "python.svg" },
    { name: "Growth Mindset", file: "growthmindset.svg" }, // Caution! Growth has to be the last one
  ];

  iconFolderPath = '/assets/icons/skillset-icons/';



  getIconFiles() {
    return this.iconFiles;
  }

  getIconFolderPath() {
    return this.iconFolderPath;
  }
}
