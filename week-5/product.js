/*
============================================
; Title: Assignment 5.2 product.js
; Date: 11 September 2021
; Modified By: Gustavo Roo Gonzalez
; Description: Assignment 5.2
;===========================================
*/

// Creates Product class and exports it
export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = Math.random().toString(16).slice(2); //Generates random number
  }
}
