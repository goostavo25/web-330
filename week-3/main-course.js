// Title: main-course.js
// Author: Gustavo Roo Gonzalez
// Date: 27 August 2021
// Description: JavaScript file for main courses.

//Importing Product from product.js file.
import { Product } from "./product.js";

//Exporting the Product class and assigning its properties.
export class MainCourse extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
