// constructor/manageController.js
export class manageController {
  constructor(view) {
    this.homeView = view;
    this.loadView();
  }
  async loadView() {
    this.homeView.render();
  }
}
