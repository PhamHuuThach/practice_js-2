//main.js
import { homeView } from "./view/homeView.js";
import { manageController } from "./controller/manageController.js";

new manageController(new homeView());
