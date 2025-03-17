import { dashboardView } from "./view/dashboard.js";
import { manageController } from "./controller/manageController.js";
import { Router } from "./routes/routes.js";
import { productView } from "./view/pages/productView.js";
import { addProductView } from "./view/pages/addProductView.js";

// Định nghĩa các route
const router = [
  {
    path: "/",
    controller: new manageController(new dashboardView()),
    target: "#mainContent",
  },
  {
    path: "/product",
    controller: new manageController(new productView()),
    target: "#mainContent",
  },
  {
    path: "/product/addProduct",
    controller: new manageController(new addProductView()),
    target: "#mainContent",
  },
];

// Khởi tạo Router
new Router(router);
