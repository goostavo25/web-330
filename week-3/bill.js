// Title: bill.js
// Author: Gustavo Roo Gonzalez
// Date: 27 August 2021
// Description: JavaScript file for billing, includes class properties, getTotal function.

//Exporting bill class & defining its properties.
export class Bill {
  //Assigning to empty arrays.
  constructor(_beverages, _appetizers, _mainCourses, _desserts) {
    this._beverages = [];
    this._appetizers = [];
    this._mainCourses = [];
    this._desserts = [];
  }

  //functions that will add specific items.
  addBeverage(beverage) {
    this._beverages.push(beverage);
  }

  addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
  }

  addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
  }

  addDessert(dessert) {
    this._desserts.push(dessert);
  }

  //Get total function that will take the chosen items and add to the total price.
  getTotal() {
    let total = 0;

    let beverageTotal = this._beverages.forEach(function (beverage) {
      total += parseFloat(beverage.price);
    });

    let appetizerTotal = this._appetizers.forEach(function (appetizer) {
      total += parseFloat(appetizer.price);
    });

    let mainCourse = this._mainCourses.forEach(function (mainCourse) {
      total += parseFloat(mainCourse.price);
    });

    let dessertTotal = this._desserts.forEach(function (dessert) {
      total += parseFloat(dessert.price);
    });

    return total.toFixed(2);
  }
}
