import { Component, Input, input } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { Bebidas } from '../../../database/database.component';
import { CommonModule, NgIf } from '@angular/common';
import { BebidaFichaComponent } from '../bebida-ficha.component';

@Component({
  selector: 'app-ficha-hijo',
  standalone: true,
  imports: [CommonModule, NgIf, BebidaFichaComponent],
  templateUrl: './ficha-hijo.component.html',
  styleUrl: './ficha-hijo.component.css'
})
export class FichaHijoComponent {
  @Input({ required: true }) bebida: Bebidas = {
    id: 'ID Default',
    nombre: 'nombre Default',
    clase: 'clase Default',
    cepa: 'cepa Default',
    bodega: 'bodega Default',
    image: 'image Default',
    maridaje: 'maridaje Default',
  };

  constructor() {
    
  }
}
