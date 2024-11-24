import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {

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
      text: 'Und hier ein drittes Testimonial mit einem anderen Textinhalt.',
      author: 'Peter Müller3'
    },
    {
      text: 'Und hier ein drittes Testimonial mit einem anderen Textinhalt.',
      author: 'Peter Müller4'
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

