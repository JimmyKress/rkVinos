/*import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Bebidas } from '../../database/database.component';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [DataService]
})
export class FormComponent {
  constructor(public http:HttpClient, private service:DataService){}

  previewUrl: string | ArrayBuffer | null = null;
  suscribeData!: Subscription
  //bebidas!: Bebidas[];
  bebida: Bebidas = { 
    id: 0,
    nombre: '',
    cepa: '',
    bodega: '',
    image: '',
    create_at: new Date()
  }
  archivos: File[] = [] || null;

  envData() {
    delete this.bebida.id;
    delete this.bebida.create_at;
    this.suscribeData = this.http.post('http://localhost:3000/api/bebidas', this.bebida)
      .subscribe({
        next: (res) => {
          this.bebida =  res;
          console.log('Éxito:', res);
        },
        error: (error) => {
          console.error('Error al subir el archivo:', error);
        }
      });
  }
  
  ngOnDestroy() {
    if (this.suscribeData) {
      this.suscribeData.unsubscribe();
    }
  }
}

*/