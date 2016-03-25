import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>Meal List</h1>
    <hr>
    <meal-list
      [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
    </meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Hamburger", "Single patty w/ cheese", 675),
      new Meal("Yogurt and Granola", "So healthy", 285),
      new Meal("Pasta Bolognese", "Italian sausage & mushrooms", 650),
      new Meal("Cereal and Milk", "Cheerios with 1% milk", 250)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
