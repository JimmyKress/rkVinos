import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { WpComponent } from './components/wp/wp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
            RouterOutlet,
            HttpClientModule,
            HeaderComponent,
            FormsModule,
            FooterComponent,
            MainComponent,
            WpComponent
           ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';
}
