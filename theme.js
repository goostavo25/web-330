/*
============================================
; Title: Assignment 1.3
; Author: Gustavo Roo Gonzalez
; Date: 14 August 2021
; Description: 
;===========================================
*/


// Function to set default theme to 'light' if not set in the browsers localStorage

function setDefaultTheme() {
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

// Function to set the HTML body to the user's choice. If none is selected, set the theme to 'light'

function setSelectedTheme() {
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}