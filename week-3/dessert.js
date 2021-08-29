// Title: dessert.js
// Author: Gustavo Roo Gonzalez
// Date: 27 August 2021
// Description: JavaScript file for desserts.

//Importing product class from product.js fileS
import { Product } from "./product.js";

//Exporting and declaring Dessert class & defining its properties.
export class Dessert extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
