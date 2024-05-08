import linkToButton from "./link-to-button.js";

const app = {
  initialize() {
    linkToButton.activate();
  },
};

document.addEventListener("DOMContentLoaded", app.initialize);

console.log("main.js loaded!");
