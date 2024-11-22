import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {

  testimonials = [
    {
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas eos adipisci illo deserunt nihil labore illum, eveniet debitis nemo dignissimos? Minima quae quasi ex hic blanditiis molestias doloremque adipisci iure.',
      author: 'Hans Jürgen1'
    },
    {
      text: 'Ein zweites Testimonial. Ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'Anna Schmidt2'
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
    if(window.innerWidth < 768) {
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

