// views/homeView.js
import { indexView } from "./layouts/indexView.js";
export class homeView {
  constructor() {
    this.app = document.getElementById("app");
  }

  render() {
    this.app.innerHTML = "";
    this.app.innerHTML = indexView();
    const showGroupItems = document.querySelectorAll(".nav-item-show-group");

    showGroupItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        item.classList.toggle("active");
      });
    });
  }
}
