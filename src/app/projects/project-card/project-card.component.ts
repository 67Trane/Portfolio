import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  @Input() isModalOpen: boolean = true
  @Output() isModalOpenChange = new EventEmitter<boolean>();

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
    this.isModalOpenChange.emit(this.isModalOpen); // Signal an den Parent
  }


}
