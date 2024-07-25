import { DataService } from '../../service/data.service';
import { Bebidas } from '../../database/database.component';
import { Subscription } from 'rxjs';
import { HijoListComponent } from './hijo-list/hijo-list.component'; 
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HijoListComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css', 
  providers: [DataService]

})

export class ListComponent implements OnDestroy, OnInit {
  bebidasSubscription!: Subscription;
  bebida: Bebidas[] = [];

  constructor( 
              public dataGettingService: DataService,
              public breakpointObserver: BreakpointObserver,
              public service: DataService,
              private router: Router,
              
              ){}

  ngOnInit() {
      this.showData();
    }


  navigateToDetail(id: any): void {
    if (id !== undefined) {
      this.router.navigate(['/bebida-ficha', id]);
    }
  }

  showData(): void{
    this.bebidasSubscription = this.service.getData().subscribe({
      next: (res: Bebidas[]) => {
        this.bebida = res;
      },
      error: (err: any) => {
        console.error('Error al obtener los datos:', err);
      }
    })
  }


  ngOnDestroy(): void {
    if (this.bebidasSubscription) {
      this.bebidasSubscription.unsubscribe();
    }
  }


}
