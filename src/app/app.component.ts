import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsetComponent } from "./skillset/skillset.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, SkillsetComponent, ProjectsComponent, TestimonialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `<p>{{ title() }}</p>`
})
export class AppComponent {
  title = input<string>();
}
