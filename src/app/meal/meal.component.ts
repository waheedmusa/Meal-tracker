import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {


  meals:Meal[] = [
    new Meal(1,"Rice", 205 , "White, long grain, cooked, 1 cup"),
    new Meal(2, "Pizza", 298, "Pepperoni, regular crust, one slice"),
    new Meal(3, "Spaghetti", 221 , "Cooked, enriched, without added salt, 1 cup"),
   ];
  constructor() { }

  ngOnInit() {
  }

}
