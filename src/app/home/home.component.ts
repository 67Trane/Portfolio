import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsetComponent } from '../skillset/skillset.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, CommonModule, HeroComponent, AboutMeComponent, SkillsetComponent, ProjectsComponent, TestimonialComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  mouseX: number = 0;
  mouseY: number = 0;
  currentLang = 'en'; // Standard-Sprache

  constructor(private translate: TranslateService, private router: Router) {
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

  isImpressumRoute(): boolean {
    return this.router.url === '/impressum';
  }
}
