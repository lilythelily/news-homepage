"use strict";

const menuBtn = document.querySelector("#hamburger");
const sidePanel = document.querySelector(".side-panel");
const closeBtn = document.querySelector("#close");
const overlay = document.querySelector("#overlay");

// toggle side panel

function showPanel() {
  sidePanel.style.right = "0px";
  sidePanel.style.transition = "all 0.4s";
  overlay.classList.remove("hidden");
}

function closePanel() {
  sidePanel.style.right = "-300px";
  overlay.classList.add("hidden");
}

// button events

menuBtn.addEventListener("click", (e) => {
  showPanel();
});

closeBtn.addEventListener("click", (e) => {
  closePanel();
});
