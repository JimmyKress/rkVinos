import { Routes } from '@angular/router';
import { BebidaFichaComponent } from './components/bebida-ficha/bebida-ficha.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'bebida-ficha/:id', component: BebidaFichaComponent }
];
