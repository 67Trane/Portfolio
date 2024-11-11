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
      author: 'Hans Jürgen'
    },
    {
      text: 'Ein zweites Testimonial. Ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'Anna Schmidt'
    },
    {
      text: 'Und hier ein drittes Testimonial mit einem anderen Textinhalt.',
      author: 'Peter Müller'
    }
  ];

  currentIndex = 0;

  get previousIndex() {
    return (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  get nextIndex() {
    return (this.currentIndex + 1) % this.testimonials.length;
  }

  previous() {
    this.currentIndex = this.previousIndex;
  }

  next() {
    this.currentIndex = this.nextIndex;
  }
}

