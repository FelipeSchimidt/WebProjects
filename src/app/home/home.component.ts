import { Component } from '@angular/core';
import { ListModel } from '../model/ListModel';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    
  title = "Suits de aplicações";
  
  lista: ListModel[] = [];

  add(title: string, description?: string, attachment?: string): ListModel {
    const item = new ListModel();
    item.title = title;
    item.description = description;
    item.attachment = attachment;
    this.lista.push(item);
    console.log(this.lista);
    return item;
  }
}
