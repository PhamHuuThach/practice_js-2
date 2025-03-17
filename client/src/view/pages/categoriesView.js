// categoriesView.js
import { pageHeaderView } from "../layouts/pageHeaderView.js";
import { productFilters } from "../layouts/productFilters.js";
import { table } from "../components/table.js";
import { attachPaginationListeners } from "../components/table.js";
import { PAGE_HEADER_CATEGORY } from "../constans";
import { SEARCH_DATA_CATEGORY } from "../constans";
import {
  TABLE_HEADERS_CATEGORY,
  IMAGE_TABLE_CATEGORY,
  PAGINATION_PAGE_PRODUCT,
  dataCategory,
} from "../constans";

export class categoriesView {
  render(container) {
    container.innerHTML = `
         ${pageHeaderView(
           PAGE_HEADER_CATEGORY.TITLE,
           PAGE_HEADER_CATEGORY.BREADCRUMB_CATEGORY,
           PAGE_HEADER_CATEGORY.BUTTON_ACTION_CATEGORY
         )}
        <section class="product-section">
        ${productFilters(SEARCH_DATA_CATEGORY)}
        ${table(
          TABLE_HEADERS_CATEGORY,
          IMAGE_TABLE_CATEGORY,
          PAGINATION_PAGE_PRODUCT,
          dataCategory,
          "category"
        )}
        
        </section>
        `;
    this.setupEvents();
  }

  setupEvents() {
    attachPaginationListeners(
      TABLE_HEADERS_CATEGORY,
      IMAGE_TABLE_CATEGORY,
      PAGINATION_PAGE_PRODUCT,
      dataCategory,
      "category"
    );
  }
}
