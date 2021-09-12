/*
============================================
; Title: Assignment 5.2 cart-component.js
; Date: 11 September 2021
; Modified By: Gustavo Roo Gonzalez
; Description: Assignment 5.2
;===========================================
*/

// Creating CartComponent class and Extends it to HTML Element
class CartComponent extends HTMLElement {
  constructor() {
    super();
  }

  // Calling connectedCallback function
  connectedCallback() {
    // Displays cart icon and the cart-count of items in the shopping cart.
    this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
  }
}

// Defining custom element
customElements.define("cart-component", CartComponent);
