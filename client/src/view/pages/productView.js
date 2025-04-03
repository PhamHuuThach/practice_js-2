import { pageHeaderView } from "../layouts/pageHeaderView.js";
import { productFilters } from "../layouts/productFilters.js";
import { table, attachPaginationListeners } from "../components/table.js";
import { PAGE_HEADER_PRODUCT } from "../constans";
import { SEARCH_DATA_PRODUCT } from "../constans";
import {
  TABLE_HEADERS_PRODUCT,
  IMAGE_TABLE_PRODUCT,
  PAGINATION_PAGE_PRODUCT,
  dataProduct,
} from "../constans";

export class productView {
  render(container) {
    container.innerHTML = `
      ${pageHeaderView(
        PAGE_HEADER_PRODUCT.TITLE,
        PAGE_HEADER_PRODUCT.BREADCRUMB_PRODUCT,
        PAGE_HEADER_PRODUCT.BUTTON_ACTION_PRODUCT
      )}
      <section class="product-section">
        ${productFilters(SEARCH_DATA_PRODUCT)}
        <div id="product-table-container">
          ${table(
            TABLE_HEADERS_PRODUCT,
            IMAGE_TABLE_PRODUCT,
            PAGINATION_PAGE_PRODUCT,
            dataProduct,
            "product"
          )}
        </div>
      </section>
    `;
    this.setupEvents();
  }

  setupEvents() {
    attachPaginationListeners(
      TABLE_HEADERS_PRODUCT,
      IMAGE_TABLE_PRODUCT,
      PAGINATION_PAGE_PRODUCT,
      dataProduct,
      "product"
    );
  }
}
