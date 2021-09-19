/*
============================================
; Title: float-max-field.js
; Date: 19 September 2021
; Author: Gustavo Roo Gonzalez
; Description: Float Max Field
;===========================================
*/

// FloatMaxField class to export it
export class FloatMaxField {
  constructor(name, field, max) {
    this.name = name;
    this.field = field;
    this.max = max;
  }

  // Validate function.
  validate() {
    if (this.field < this.max) {
      return true;
    } else {
      return false;
    }
  }

  // getMessage function.
  getMessage() {
    return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
  }
}
