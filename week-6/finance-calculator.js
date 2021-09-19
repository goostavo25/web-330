/*
============================================
; Title: finance-calculator.js
; Date: 19 September 2021
; Author: Gustavo Roo Gonzalez
; Description: Finance Calculator
===========================================
*/

// Creation of FinanceCalculator class to export it.
export class FinanceCalculator {
  static MONTHS_IN_YEAR = 12;

  // Static function calculateFutureValue
  static calculateFutureValue(monthlyPayment, rate, years) {
    // Declaring variables.
    let months = years * this.MONTHS_IN_YEAR;
    let interestRate = 1 + rate / 100;
    let presentValue = monthlyPayment * months;
    let futureValue = (presentValue * Math.pow(interestRate, months)).toFixed(2);

    // Return futureValue
    return futureValue;
  }

  // Static convertToCurrency function.
  static convertToCurrency(field) {
    let currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return currencyFormatter.format(field);
  }
}
