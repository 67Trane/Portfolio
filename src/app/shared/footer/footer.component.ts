import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  year = new Date().getFullYear();
  constructor(private router: Router) {}

  navigateAndScroll() {
    this.router.navigate(['/impressum']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

}
