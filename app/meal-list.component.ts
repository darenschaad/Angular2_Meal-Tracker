import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { CaloriePipe } from './calorie.pipe';
import { NewMealComponent} from './new-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
  <select class="calories" (change)="onCalorie($event.target.value)">
    <option value="all">Show All Meals</option>
    <option value="low">300 Calories or Less </option>
    <option value="high">Over 300 Calories </option>
  </select>
    <meal-display *ngFor="#currentMeal of mealList | calorie:filterCalorie"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
    </meal-display>
    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
    </edit-meal-details>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalorie: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal([mealName, mealDetails, mealCalories]): void {
    this.mealList.push(
      new Meal(mealName, mealDetails, mealCalories)
    );
  }
  onCalorie(filterOption) {
    this.filterCalorie = filterOption;
  }
}
