import { layoutView } from "../view/layouts/rootLayout";
import { setupSidebar } from "../view/layouts/sidebarView";
export class Router {
  constructor(routes) {
    this.routes = routes; // Lưu trữ các route
    this.currentRoute = null; // Lưu trữ route hiện tại
    this.init(); // Khởi tạo router
  }

  // Khởi tạo router
  init() {
    // Lắng nghe sự kiện hashchange và load
    window.addEventListener("hashchange", () => this.handleRouteChange());
    window.addEventListener("load", () => this.handleRouteChange());
    const app = document.querySelector("#app");
    app.innerHTML = layoutView();
    setupSidebar();
  }

  // Xử lý thay đổi route
  handleRouteChange() {
    const pathname = window.location.pathname || "/";
    const route = this.routes.find((route) => route.path === pathname); // Tìm route phù hợp

    if (route) {
      this.currentRoute = route;
      const targetElement = document.querySelector(route.target);

      if (targetElement) {
        route.controller.loadView(route.target); // Hiển thị view tương ứng với target
      } else {
        this.app.innerHTML = "Target element" + route.target + " not found!";
      }
    } else {
      console.error("Route not found!");
      window.location.pathname = "/";
    }
  }
}
