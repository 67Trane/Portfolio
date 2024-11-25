import { Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Hauptseite
    { path: 'impressum', component: ImpressumComponent } // Impressum-Seite
  ];
