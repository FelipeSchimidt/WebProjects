import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Services } from '../services/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  NgOnInit(): void {
    const service = new Services( );
  }
    title = "Suits de aplicações";

    
}
