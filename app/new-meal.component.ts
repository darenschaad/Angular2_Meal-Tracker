import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="keg-form">
      <div class="row">
        <br>
        <h3>Enter New Meal</h3>
        <input placeholder="Meal Name" class="col-sm-8 input-lg" #newName>
        <input placeholder="Details" class="col-sm-8 input-lg" #newDetails>
        <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
      </div>
      <button class="btn-lg btn-success add"(click)="addMeal(newName, newDetails, newCalories)">Add</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
      this.onSubmitNewMeal.emit([userName.value, userDetails.value, userCalories.value]);
      userName.value = "";
      userCalories.value = "";
      userDetails.value = "";
    }
  }
