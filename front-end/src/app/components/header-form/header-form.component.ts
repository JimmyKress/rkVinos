import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-form',
  standalone: true,
  imports: [],
  templateUrl: './header-form.component.html',
  styleUrl: './header-form.component.css'
})
export class HeaderFormComponent {
  constructor(private router: Router){}

  navigateToAddBebidas(): void {
    this.router.navigate(['/bebidas/add']);
  }
}
