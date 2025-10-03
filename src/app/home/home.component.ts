import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Services } from '../services/services';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
  
  NgOnInit(): void {
    
  }
    title = "Suits de aplicações";

    
}
