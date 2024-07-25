import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { CartaComponent } from '../carta/carta.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { BebidaFichaComponent } from '../bebida-ficha/bebida-ficha.component';
import { FichaHijoComponent } from '../bebida-ficha/ficha-hijo/ficha-hijo.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ListComponent,
    CartaComponent,
    CarouselComponent,
    BebidaFichaComponent,
    FichaHijoComponent,
 
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
