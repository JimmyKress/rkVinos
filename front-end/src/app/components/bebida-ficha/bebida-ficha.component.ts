import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';
import { Bebidas } from '../../database/database.component'; // Ajusta la ruta según sea necesario
import { Subscription } from 'rxjs';
import { FichaHijoComponent } from './ficha-hijo/ficha-hijo.component';

@Component({
  selector: 'app-bebida-ficha',
  imports: [FichaHijoComponent],
  templateUrl: './bebida-ficha.component.html',
  styleUrls: ['./bebida-ficha.component.css'],
  standalone: true,
  providers: [DataService]
})
export class BebidaFichaComponent {
  bebida: Bebidas;
  suscripcion!: Subscription;
  id: string | null = null;
  datosListos: boolean = false;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.bebida = {
      id: '',
      nombre: '',
      clase: '',
      cepa: '',
      bodega: '',
      image: '',
      maridaje: '',
    };
    console.log(this.bebida);
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.suscripcion = this.dataService.getDataId(this.id).subscribe((data: Bebidas[]) => {
      this.bebida = data[0];
      console.log(this.bebida);
    });
  }

  ngOnDestroy(): void {
    if (this.suscripcion) {
      this.suscripcion.unsubscribe();
    }
  }
}
