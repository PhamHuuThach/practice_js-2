const createSidebarItem = (item) => {
  if (item.TYPE === "link") {
    return `
        <a href="${item.HREF}" class="nav-item" data-route="${item.HREF}">
          <img class="nav-icon" src="${item.ICON}" alt="${item.TEXT}">
          <span>${item.TEXT}</span>
        </a>
      `;
  } else if (item.TYPE === "group") {
    return `
        <div class="nav-item-wrapper">
          <a href="${
            item.HREF
          }" class="nav-item nav-item-show-group" data-route="${item.HREF}">
            <img class="nav-icon" src="${item.ICON}" alt="${item.TEXT}">
            <span>${item.TEXT}</span>
            <img class="nav-indicator" src="/assets/icons/fi-sr-caret-down.svg" alt="dropdown">
          </a>
          <div class="nav-group-sub">
            ${item.CHILDREN.map(
              (child) => `
              <a href="${child.HREF}" class="nav-item" data-route="${child.HREF}">
                <span>${child.TEXT}</span>
              </a>
            `
            ).join("")}
          </div>
        </div>
      `;
  }
  return "";
};

// Hàm tạo toàn bộ sidebar
export const sidebarView = (SIDEBAR_DATA) => {
  return `
      <aside class="sidebar">
        <div class="sidebar-header">
          <div class="logo">
            <img src="/assets/img/Logo.png" alt="Pixlab Logo" class="logo-icon">
            <span class="logo-text"><h1>Pixlab</h1></span>
          </div>
        </div>
        <nav class="sidebar-nav">
          <div class="nav-group">
            ${SIDEBAR_DATA.map((item) => createSidebarItem(item)).join("")}
          </div>
        </nav>
      </aside>
    `;
};

// Hàm xử lý sự kiện cho sidebar
export const setupSidebar = () => {
  const sidebar = document.querySelector(".sidebar");

  // Xử lý sự kiện click để mở/đóng nhóm mục
  sidebar.addEventListener("click", (e) => {
    const groupItem = e.target.closest(".nav-item-show-group");
    if (groupItem) {
      const groupWrapper = groupItem.closest(".nav-item-wrapper");
      groupWrapper.classList.toggle("active");
      // Xoay mũi tên chỉ thị
      const indicator = groupItem.querySelector(".nav-indicator");
      if (groupWrapper.classList.contains("active")) {
        indicator.style.transform = "rotate(180deg)";
      } else {
        indicator.style.transform = "rotate(0deg)";
      }
    }
    // Đánh dấu mục đang được chọn
    const navItem = e.target.closest(".nav-item");
    if (navItem) {
      document.querySelectorAll(".nav-item").forEach((item) => {
        item.classList.remove("active");
      });
      navItem.classList.add("active");
    }
  });
};
