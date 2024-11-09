import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AboutMeComponent } from "./about-me/about-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `<p>{{ title() }}</p>`
})
export class AppComponent {
  title = input<string>();
}
