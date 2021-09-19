/*
============================================
; Title: float-min-field.js
; Date: 19 September 2021
; Author: Gustavo Roo Gonzalez
; Description: Float Min Field
;===========================================
*/

// FloatMinField class to export it
export class FloatMinField {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }

  // Validate function
  validate() {
    if (this.field > this.min) {
      return true;
    } else {
      return false;
    }
  }

  // getMessage function.
  getMessage() {
    return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
  }
}
