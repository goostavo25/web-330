// Title: appetizer.js
// Author: Gustavo Roo Gonzalez
// Date: 27 August 2021
// Description: JavaScript file for appetizers

//Importing product class from product.js fileS
import { Product } from "./product.js";

//Exporting Appetizer class and defining properties.
export class Appetizer extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
