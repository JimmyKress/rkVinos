import { Component, Input } from '@angular/core';
import { Bebidas } from '../../../database/database.component';
import { DataService } from '../../../service/data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hijo-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './hijo-list.component.html',
  styleUrl: './hijo-list.component.css',
})
export class HijoListComponent {
  @Input() bebida?: Bebidas[];
  
  
  navigateToDetail(id: any): void {
    if (id !== undefined) {
      this.router.navigate(['/bebida-ficha', id]);
    }
  }
  
  constructor(
    private router: Router
    ){}

  ngOnInit() {
  }

  
}
