/*
============================================
; Title: Assignment 4.2
; Author: Gustavo Roo Gonzalez
; Date: 04 September 2021
; Description: calorie-converter.je
;===========================================
*/

// Import FoodModel class.
import { FoodModel } from "./food-model.js";

// Create CalorieConverter class.
export class CalorieConverter {
  // Create static variable array.
  static data = [
    new FoodModel(1007, "Egg", 78),
    new FoodModel(1008, "Apple", 95),
    new FoodModel(1009, "Hamburger", 354),
    new FoodModel(1010, "Fries", 400),
    new FoodModel(1011, "Banana", 105),
    new FoodModel(1012, "Soda", 150),
  ];

  static find(searchString) {
    return this.data.filter((foodModel) =>
      foodModel.name.toLowerCase().includes(searchString.toLowerCase())
    );
  }
}
