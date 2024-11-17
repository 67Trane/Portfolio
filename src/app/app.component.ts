import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsetComponent } from "./skillset/skillset.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, SkillsetComponent, ProjectsComponent, TestimonialComponent, ContactComponent, FooterComponent, CommonModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  mouseX: number = 0;
  mouseY: number = 0;
  currentLang = 'en'; // Standard-Sprache

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLang);
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;  // X-Position relativ zum Fenster
    this.mouseY = event.clientY;  // Y-Position relativ zum Fenster
  }
}
