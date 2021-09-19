/*
============================================
; Title: required-field.js
; Date: 19 September 2021
; Author: Gustavo Roo Gonzalez
; Description: Required Field
;===========================================
*/

// RequiredField class to export it
export class RequiredField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  // Validate function.
  validate() {
    if (typeof this.field == "string" && this.field != "") {
      return true;
    } else {
      return false;
    }
  }

  // getMessage function.
  getMessage() {
    return `${this.name} is a required field.`;
  }
}
