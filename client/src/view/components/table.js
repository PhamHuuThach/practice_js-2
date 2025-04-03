// Định nghĩa hàm table trong file này
export const table = (
  TABLE_HEADERS,
  IMAGE_TABLE,
  PAGINATION_PAGE,
  data,
  dataType = "product"
) => {
  const startIndex =
    (PAGINATION_PAGE.CURRENT_PAGE - 1) * PAGINATION_PAGE.ITEMS_PER_PAGE;
  const endIndex = startIndex + PAGINATION_PAGE.ITEMS_PER_PAGE;

  // Sử dụng trực tiếp mảng data thay vì data.products hoặc data.categories
  const displayedItems = data.slice(startIndex, endIndex);

  // Xác định loại dữ liệu để render đúng cấu trúc
  const isProductData = dataType === "product";

  return `
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            ${TABLE_HEADERS.map((header, index) => {
              // Xử lý cột đầu tiên với checkbox
              if (index === 0 && header.hasCheckbox) {
                return `
                  <th class="title-column column-${index + 1}">
                    <div class="checkbox-cell-1">
                      <figure class="checkbox-cell">
                        <img class="checkbox-icon" src="assets/icons/brick.svg" alt="brick.svg">
                      </figure>
                      <span>${header.title}</span>
                    </div>
                    ${
                      header.hasSortIndicator
                        ? `
                      <img class="nav-indicator" src="assets/icons/${IMAGE_TABLE.SORT_INDICATOR_ICON}" alt="${IMAGE_TABLE.SORT_INDICATOR_ICON}">
                    `
                        : ""
                    }
                  </th>
                `;
              }

              // Các cột khác
              return `
                <th class="title-column column-${index + 1}">
                  <span>${header.title}</span>
                  ${
                    header.hasSortIndicator
                      ? `
                    <img class="nav-indicator" src="assets/icons/${IMAGE_TABLE.SORT_INDICATOR_ICON}" alt="${IMAGE_TABLE.SORT_INDICATOR_ICON}">
                  `
                      : ""
                  }
                </th>
              `;
            }).join("")}
          </tr>
        </thead>
        <tbody>
          ${displayedItems
            .map((item) => {
              if (isProductData) {
                // Render product row
                return `
                  <tr>
                    <td class="product-cell">
                      <div class="product-info">
                        <input class="checkbox-id" type="checkbox" data-id="${
                          item.id
                        }">
                        <img src="${item.image}" alt="${
                  item.name
                }" class="product-image">
                        <div>
                          <div class="product-name">${item.name}</div>
                          <div class="product-variants">${
                            item.variants || ""
                          }</div>
                        </div>
                      </div>
                    </td>
                    <td>${item.id}</td>
                    <td>${item.category}</td>
                    <td>${item.stock}</td>
                    <td>$${
                      typeof item.price === "number"
                        ? item.price.toFixed(2)
                        : item.price
                    }</td>
                    <td>
                      <span class="badge badge-${
                        item.status
                          ? item.status.toLowerCase().replace(/\s+/g, "-")
                          : "default"
                      }">
                        ${item.status || "N/A"}
                      </span>
                    </td>
                    <td>${item.added}</td>
                    <td>
                      <div class="action-buttons">
                        <button class="btn-icon" data-action="edit" data-id="${
                          item.id
                        }">
                          <img src="assets/icons/fi-sr-pencil.svg" alt="Edit">
                        </button>
                        <button class="btn-icon" data-action="view" data-id="${
                          item.id
                        }">
                          <img src="assets/icons/fi-sr-eye.svg" alt="View">
                        </button>
                        <button class="btn-icon" data-action="delete" data-id="${
                          item.id
                        }">
                          <img src="assets/icons/fi-sr-trash.svg" alt="Delete">
                        </button>
                      </div>
                    </td>
                  </tr>
                `;
              } else {
                // Render category row
                return `
                  <tr>
                    <td class="product-cell">
                      <div class="product-info">
                        <input class="checkbox-id" type="checkbox" data-id="${
                          item.id
                        }">
                        <img src="${item.image}" alt="${
                  item.name
                }" class="product-image">
                        <div>
                          <div class="product-name">${item.name}</div>
                          <div class="product-variants">${
                            item.description || ""
                          }</div>
                        </div>
                      </div>
                    </td>
                    <td>${item.sold}</td>
                    <td>${item.stock}</td>
                    <td>${item.added}</td>
                    <td>
                      <div class="action-buttons">
                        <button class="btn-icon" data-action="edit" data-id="${
                          item.id
                        }">
                          <img src="assets/icons/fi-sr-pencil.svg" alt="Edit">
                        </button>
                        <button class="btn-icon" data-action="view" data-id="${
                          item.id
                        }">
                          <img src="assets/icons/fi-sr-eye.svg" alt="View">
                        </button>
                        <button class="btn-icon" data-action="delete" data-id="${
                          item.id
                        }">
                          <img src="assets/icons/fi-sr-trash.svg" alt="Delete">
                        </button>
                      </div>
                    </td>
                  </tr>
                `;
              }
            })
            .join("")}
        </tbody>
      </table>
      <div class="pagination-container">
        ${renderPagination(data, PAGINATION_PAGE)}
      </div>
    </div>
  `;
};

function renderPagination(data, PAGINATION_PAGE) {
  // Sử dụng trực tiếp mảng data
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / PAGINATION_PAGE.ITEMS_PER_PAGE);
  const currentPage = PAGINATION_PAGE.CURRENT_PAGE;
  const startIndex = (currentPage - 1) * PAGINATION_PAGE.ITEMS_PER_PAGE + 1;
  const endIndex = Math.min(
    currentPage * PAGINATION_PAGE.ITEMS_PER_PAGE,
    totalItems
  );

  let pageButtons = "";
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pageButtons += `<button class="pagination-btn ${
        i === currentPage ? "active" : ""
      }" data-page="${i}">${i}</button>`;
    } else if (pageButtons.slice(-3) !== "...") {
      pageButtons += '<span class="pagination-ellipsis">...</span>';
    }
  }

  return `
    <div class="pagination-info">
      Showing ${startIndex}-${endIndex} from ${totalItems}
    </div>
    <div class="pagination">
      <button class="pagination-btn" data-page="prev" ${
        currentPage === 1 ? "disabled" : ""
      }>
        <img class="nav-indicator" src="assets/icons/fi-rr-caret-left.svg" alt="Previous">
      </button>
      ${pageButtons}
      <button class="pagination-btn" data-page="next" ${
        currentPage === totalPages ? "disabled" : ""
      }>
        <img class="nav-indicator" src="assets/icons/fi-sr-caret-right.svg" alt="Next">
      </button>
    </div>
  `;
}

// Hàm xử lý sự kiện phân trang
function handlePaginationClick(
  event,
  TABLE_HEADERS,
  IMAGE_TABLE,
  PAGINATION_PAGE,
  data,
  dataType = "product"
) {
  const target = event.target;
  if (target.classList.contains("pagination-btn")) {
    const page = target.dataset.page;
    if (page === "prev") {
      PAGINATION_PAGE.CURRENT_PAGE = Math.max(
        1,
        PAGINATION_PAGE.CURRENT_PAGE - 1
      );
    } else if (page === "next") {
      // Sử dụng trực tiếp mảng data
      const totalPages = Math.ceil(
        data.length / PAGINATION_PAGE.ITEMS_PER_PAGE
      );
      PAGINATION_PAGE.CURRENT_PAGE = Math.min(
        totalPages,
        PAGINATION_PAGE.CURRENT_PAGE + 1
      );
    } else {
      PAGINATION_PAGE.CURRENT_PAGE = Number.parseInt(page);
    }
    const tableContainer = document.querySelector(".table-container");
    // Truyền đầy đủ tham số khi gọi table()
    tableContainer.innerHTML = table(
      TABLE_HEADERS,
      IMAGE_TABLE,
      PAGINATION_PAGE,
      data,
      dataType
    );
    attachPaginationListeners(
      TABLE_HEADERS,
      IMAGE_TABLE,
      PAGINATION_PAGE,
      data,
      dataType
    );
  }
}

// Cập nhật hàm attachPaginationListeners để nhận tham số
export function attachPaginationListeners(
  TABLE_HEADERS,
  IMAGE_TABLE,
  PAGINATION_PAGE,
  data,
  dataType = "product"
) {
  const paginationContainer = document.querySelector(".pagination-container");
  if (paginationContainer) {
    // Xóa tất cả event listeners cũ để tránh trùng lặp
    const newPaginationContainer = paginationContainer.cloneNode(true);
    paginationContainer.parentNode.replaceChild(
      newPaginationContainer,
      paginationContainer
    );

    // Thêm event listener mới với tham số đầy đủ
    newPaginationContainer.addEventListener("click", (event) =>
      handlePaginationClick(
        event,
        TABLE_HEADERS,
        IMAGE_TABLE,
        PAGINATION_PAGE,
        data,
        dataType
      )
    );
  }
}
