/*
============================================
; Title: float-field.js
; Date: 19 September 2021
; Author: Gustavo Roo Gonzalez
; Description: Float Field
;===========================================
*/

// FloatField class to export it
export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  // Validate function
  validate() {
    const value = parseFloat(this.field);
    if (isNaN(value)) {
      return false;
    } else {
      return true;
    }
  }

  // getMessage function.
  getMessage() {
    return `${this.name} must be a float value. You entered ${this.field}`;
  }
}
