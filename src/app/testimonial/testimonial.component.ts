import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {

  constructor(public global: GlobalService) {}

  testimonials = [
    {
      text: 'TESTIMONIALS.KAISCHULZ.TESTI',
      author: 'Kai Schulz'
    },
    {
      text: 'TESTIMONIALS.DENISDUDDA.TESTI',
      author: 'Denis Dudda'
    },
    {
      text: 'TESTIMONIALS.SARAHMUELLER.TESTI',
      author: 'Sarah Müller'
    },
    {
      text: 'TESTIMONIALS.JONASWEBER.TESTI',
      author: 'Jonas Weber'
    }
  ];

  currentIndex = 0;

  get currentTranslate(): string {
    if (window.innerWidth < 768) {
      return `translateX(-${this.currentIndex * 100}%)`;
    } else {
      return `translateX(-${this.currentIndex * 120}%)`;
    }

  }

  getFillColor(index: number): string {
    if (this.global.themeMode) {
      return index === this.currentIndex ? '#000000' : '#3DCFB6';
    } else {
      return index === this.currentIndex ? '#10B981' : '#FFFFFF';
    }
  }

  right() {
    if (this.currentIndex < this.testimonials.length - 1) {
      this.currentIndex++;
    }
  }

  left() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

}

