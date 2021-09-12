/*
============================================
; Title: Assignment 5.2 shopping-cart.js
; Date: 11 September 2021
; Modified By: Gustavo Roo Gonzalez
; Description: Assignment 5.2
;===========================================
*/

// Creates ShoppingCart class and exports it.
export class ShoppingCart {
  constructor() {
    // Creates empty array named _products.
    this._products = [];
  }

  // Calls the count function
  count() {
    // Returns length of the _products array.
    return this._products.length;
  }

  // Calls the add function.
  add(product) {
    // Pushes product into the products array
    this._products.push(product);
  }

  // Creates iterator
  *[Symbol.iterator]() {
    // Iterates over each product in the _products array
    for (let product of this._products) {
      // Pauses at each item and returns the product.
      yield product;
    }
  }
}
