import { Component} from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsetComponent } from "./skillset/skillset.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, SkillsetComponent, ProjectsComponent, TestimonialComponent, ContactComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  mouseX: number = 0;
  mouseY: number = 0;

  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;  // X-Position relativ zum Fenster
    this.mouseY = event.clientY;  // Y-Position relativ zum Fenster
  }
}
