import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsetService {



  iconFiles = [
    // 🧱 Frontend
    { name: "HTML", file: "html.svg" },
    { name: "CSS", file: "css.svg" },
    { name: "JavaScript", file: "Javascript.svg" },
    { name: "TypeScript", file: "typescript.svg" },
    { name: "Angular", file: "Angular.svg" },
    { name: "Material Design", file: "Frame.svg" },

    // 🔧 Tools & Collaboration
    { name: "Git", file: "git.svg" },
    { name: "Scrum", file: "scrum.svg" },
    { name: "API", file: "Api.svg" },
    { name: "Firebase", file: "Firebase.svg" },

    // ⚙️ Backend & Databases
    { name: "Python", file: "python.svg" },
    { name: "Django", file: "django.svg" },
    { name: "JWT", file: "jwt.svg" },
    { name: "PostgreSQL", file: "postgresql.svg" },
    { name: "SQLite", file: "sqlite.svg" },
    { name: "Redis", file: "redis.svg" },
    { name: "Gunicorn", file: "gunicorn.svg" },

    // 🐳 DevOps & Systems
    { name: "Docker", file: "docker.svg" },
    { name: "Nginx", file: "nginx.svg" },
    { name: "Debian", file: "debian.svg" },
    { name: "Linux", file: "linux.svg" },
    { name: "Raspberry Pi", file: "raspi.svg" },

    // 💡 Personal Skills
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
