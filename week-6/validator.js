/*
============================================
; Title: validator.js
; Date: 19 September 2021
; Author: Gustavo Roo Gonzalez
; Description: Validator
;===========================================
*/

// Importing classes
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

// Create Validator class
export class Validator {
  constructor(name, field) {
    this.name = name;
    this.field = field;
    this._validators = [];
    this._messages = [];
  }

  //Necessary functions for Required/Float fields
  addRequiredField() {
    this._validators.push(new RequiredField(this.name, this.field));
  }

  addRequiredFloatField() {
    this._validators.push(new FloatField(this.name, this.field));
  }

  addFloatMinField(min) {
    this._validators.push(new FloatMinField(this.name, this.field, min));
  }

  addFloatMaxField(max) {
    this._validators.push(new FloatMaxField(this.name, this.field, max));
  }

  // Validate function
  validate() {
    this._messages = [];
    for (let validate of this._validators) {
      let valid = validate.validate();
      if (valid == false) {
        let message = validate.getMessage();
        this._messages.push(message);
        return false;
      }
    }
    if (this._messages.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}
