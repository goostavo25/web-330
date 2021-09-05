/*
============================================
; Title: Assignment 4.2
; Author: Gustavo Roo Gonzalez
; Date: 04 September 2021
; Description: food-model.js
;===========================================
*/

import { CalorieConverter } from "./calorie-converter.js";

// Creating the FoodModel class
export class FoodModel {
  constructor(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
}
