// views/homeView.js
import { indexView } from "./layouts/indexView.js";
export class homeView {
  constructor() {
    this.app = document.getElementById("app");
  }

  render() {
    this.app.innerHTML = "";
    this.app.innerHTML = indexView();
  }
}
