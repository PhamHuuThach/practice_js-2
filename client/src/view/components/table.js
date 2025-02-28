const dataProduct = {
  products: [
    {
      id: "302011",
      name: "Smartwatch E2",
      variants: "2 Variants",
      image: "assets/img/Logo.png",
      category: "Watch",
      stock: 204,
      price: 590.0,
      status: "Published",
      added: "24 Dec 2022",
    },
    {
      id: "302011",
      name: "Smartwatch E2",
      variants: "2 Variants",
      image: "assets/img/Logo.png",
      category: "Watch",
      stock: 204,
      price: 590.0,
      status: "Published",
      added: "24 Dec 2022",
    },
    {
      id: "302011",
      name: "Smartwatch E2",
      variants: "2 Variants",
      image: "assets/img/Logo.png",
      category: "Watch",
      stock: 204,
      price: 590.0,
      status: "Published",
      added: "24 Dec 2022",
    },
    {
      id: "302011",
      name: "Smartwatch E2",
      variants: "2 Variants",
      image: "assets/img/Logo.png",
      category: "Watch",
      stock: 204,
      price: 590.0,
      status: "Published",
      added: "24 Dec 2022",
    },
    {
      id: "302011",
      name: "Smartwatch E2",
      variants: "2 Variants",
      image: "assets/img/Logo.png",
      category: "Watch",
      stock: 204,
      price: 590.0,
      status: "Published",
      added: "24 Dec 2022",
    },
    {
      id: "302011",
      name: "Smartwatch E2",
      variants: "2 Variants",
      image: "assets/img/Logo.png",
      category: "Watch",
      stock: 204,
      price: 590.0,
      status: "Published",
      added: "24 Dec 2022",
    },
    {
      id: "302011",
      name: "Smartwatch E2",
      variants: "2 Variants",
      image: "assets/img/Logo.png",
      category: "Watch",
      stock: 204,
      price: 590.0,
      status: "Published",
      added: "24 Dec 2022",
    },
    {
      id: "302011",
      name: "Smartwatch E2",
      variants: "2 Variants",
      image: "assets/img/Logo.png",
      category: "Watch",
      stock: 204,
      price: 590.0,
      status: "Published",
      added: "24 Dec 2022",
    },
    {
      id: "302011",
      name: "Smartwatch E2",
      variants: "2 Variants",
      image: "assets/img/Logo.png",
      category: "Watch",
      stock: 204,
      price: 590.0,
      status: "Published",
      added: "24 Dec 2022",
    },
    {
      id: "302011",
      name: "Smartwatch E2",
      variants: "2 Variants",
      image: "assets/img/Logo.png",
      category: "Watch",
      stock: 204,
      price: 590.0,
      status: "Published",
      added: "24 Dec 2022",
    },
  ],
  currentPage: 1,
  itemsPerPage: 4,
};

export const table = () => {
  const startIndex = (dataProduct.currentPage - 1) * dataProduct.itemsPerPage;
  const endIndex = startIndex + dataProduct.itemsPerPage;
  const displayedProducts = dataProduct.products.slice(startIndex, endIndex);

  return `
      <div class="product-table-container">
          <table class="product-table">
                 <thead>
                    <tr>
                        <th class="title-column column-1">
                        <div class="checkbox-cell-1">
                         <figure class="checkbox-cell">
                                <img class="checkbox-icon" src="assets/icons/brick.svg" alt="brick.svg">
                          </figure>
                          <span>Product</span>
                        </div>
                            <img class="nav-indicator" src="assets/icons/fi-sr-caret-down.svg" alt="fi-sr-caret-down.svg">
                            </th>
                        <th class="title-column column-2">SKU</th>
                        <th class="title-column column-3">Category</th>
                        <th class="title-column column-4">
                            Stock
                            <img class="nav-indicator" src="assets/icons/fi-sr-caret-down.svg" alt="fi-sr-caret-down.svg">
                        </th>
                        <th class="title-column column-5">
                            Price
                            <img class="nav-indicator" src="assets/icons/fi-sr-caret-down.svg" alt="fi-sr-caret-down.svg">
                        </th>
                        <th class="title-column column-6">
                            Status
                            <img class="nav-indicator" src="assets/icons/fi-sr-caret-down.svg" alt="fi-sr-caret-down.svg">
                        </th>
                        <th class="title-column column-7">
                            Added
                            <img class="nav-indicator" src="assets/icons/fi-sr-caret-down.svg" alt="fi-sr-caret-down.svg">
                        </th>
                        <th class="title-column column-8">
                            Action
                        </th>
                    </tr>
                </thead>
              <tbody>
                  ${displayedProducts
                    .map(
                      (product) => `
                      <tr>
                          <td class="product-cell">
                              <div class="product-info">
                              <input class="checkbox-id" type="checkbox" class="select-item" data-id="${
                                product.id
                              }">
                                  <img src="${product.image}" alt="${
                        product.name
                      }" class="product-image">
                                  <div>
                                      <div class="product-name">${
                                        product.name
                                      }</div>
                                      <div class="product-variants">${
                                        product.variants
                                      }</div>
                                  </div>
                              </div>
                          </td>
                          <td>${product.id}</td>
                          <td>${product.category}</td>
                          <td>${product.stock}</td>
                          <td>$${product.price.toFixed(2)}</td>
                          <td>
                              <span class="badge badge-${product.status
                                .toLowerCase()
                                .replace(" ", "-")}">
                                  ${product.status}
                              </span>
                          </td>
                          <td>${product.added}</td>
                          <td>
                              <div class="action-buttons">
                                  <button class="btn-icon" data-action="edit" data-id="${
                                    product.id
                                  }">
                                      <img src="assets/icons/fi-sr-pencil.svg" alt="fi-sr-pencil.svg">
                                  </button>
                                  <button class="btn-icon" data-action="view" data-id="${
                                    product.id
                                  }">
                                      <img src="assets/icons/fi-sr-eye.svg" alt="fi-sr-trash.svg">
                                  </button>
                                  <button class="btn-icon" data-action="delete" data-id="${
                                    product.id
                                  }">
                                      <img src="assets/icons/fi-sr-trash.svg" alt="fi-sr-trash.svg">
                                  </button>
                              </div>
                          </td>
                      </tr>
                  `
                    )
                    .join("")}
              </tbody>
          </table>
          <div class="pagination-container">
              ${renderPagination(dataProduct)}
          </div>
      </div>
    `;
};

function renderPagination(data) {
  const totalItems = data.products.length;
  const totalPages = Math.ceil(totalItems / data.itemsPerPage);
  const currentPage = data.currentPage;
  const startIndex = (currentPage - 1) * data.itemsPerPage + 1;
  const endIndex = Math.min(currentPage * data.itemsPerPage, totalItems);

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
              <img class="nav-indicator" src="assets/icons/fi-rr-caret-left.svg" alt="fi-rr-caret-left.svg">
          </button>
          ${pageButtons}
          <button class="pagination-btn" data-page="next" ${
            currentPage === totalPages ? "disabled" : ""
          }>
              <img class="nav-indicator" src="assets/icons/fi-sr-caret-right.svg" alt="fi-sr-caret-right.svg">
          </button>
      </div>
    `;
}
function handlePaginationClick(event) {
  const target = event.target;
  if (target.classList.contains("pagination-btn")) {
    const page = target.dataset.page;
    if (page === "prev") {
      dataProduct.currentPage = Math.max(1, dataProduct.currentPage - 1);
    } else if (page === "next") {
      const totalPages = Math.ceil(
        dataProduct.products.length / dataProduct.itemsPerPage
      );
      dataProduct.currentPage = Math.min(
        totalPages,
        dataProduct.currentPage + 1
      );
    } else {
      dataProduct.currentPage = parseInt(page);
    }
    const tableContainer = document.querySelector(".product-table-container");
    tableContainer.innerHTML = table();
    attachPaginationListeners();
  }
}
function attachPaginationListeners() {
  const paginationContainer = document.querySelector(".pagination-container");
  paginationContainer.addEventListener("click", handlePaginationClick);
}
document.addEventListener("DOMContentLoaded", () => {
  const tableContainer = document.querySelector(".product-table-container");
  if (tableContainer) {
    tableContainer.innerHTML = table();
    attachPaginationListeners();
  }
});
