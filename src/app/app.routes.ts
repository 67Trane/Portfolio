import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'impressum', component: ImpressumComponent }
];
