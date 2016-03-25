import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="meal-form padding">
      <h1>{{meal.name}}</h1>
      <h3>Details: {{meal.details}}</h3>
      <h3>Calories: {{meal.calories}}</h3>
      <form>
        <div class="form-group">
        <h4>Edit {{meal.name}}\'s Name:</h4>
        <input [(ngModel)]="meal.name" class="col-sm-8 input-lg meal-form"/>
        <br>
        </div>
      </form>
      <form>
        <div class="form-group">
        <br>
        <h4>Edit {{meal.name}}\'s Details:</h4>
        <input [(ngModel)]="meal.details" class="col-sm-8 input-lg meal-form"/>
        <br>
        </div>
      </form>
      <form>
        <div class="form-group">
        <br>
        <h4>Edit {{meal.name}}\'s Calories:</h4>
        <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg meal-form"/>
        <br>
        </div>
      </form>
    </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
