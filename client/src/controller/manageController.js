export class manageController {
  constructor(view) {
    this.view = view; // Lưu trữ view được truyền vào
  }

  // Phương thức loadView để hiển thị view
  loadView(target) {
    if (this.view && this.view.render) {
      const container = document.querySelector(target); // Lấy phần tử container dựa trên target
      if (container) {
        // container.innerHTML = ""; // Xóa nội dung hiện tại
        this.view.render(container); // Gọi phương thức render của view
      } else {
        console.error("Container element not found!");
      }
    } else {
      console.error("View is not defined or does not have a render method!");
    }
  }
}
