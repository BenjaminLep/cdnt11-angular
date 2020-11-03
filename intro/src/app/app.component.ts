import { Component } from '@angular/core';
import { FruitService } from './services/fruit.service';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro';
  fruits: string[];

  constructor(private fruitService: FruitService) {
    this.fruits = this.fruitService.getFruits();
  }
}
