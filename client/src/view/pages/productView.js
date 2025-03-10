import { pageHeaderView } from "../layouts/pageHeaderView.js";
import { productFilters } from "../layouts/productFilters.js";
import { table } from "../components/table.js";
import { PAGE_HEADER_PRODUCT } from "../constans";
import { attachPaginationListeners } from "../components/table.js";

export class productView {
  render(container) {
    container.innerHTML = `
         ${pageHeaderView(
           PAGE_HEADER_PRODUCT.BREADCRUMB_PRODUCT,
           PAGE_HEADER_PRODUCT.BUTTON_ACTION_PRODUCT
         )}
        <section class="product-section">
        ${productFilters()}
        ${table()}
        </section>
        `;
    this.setupUI();
  }

  setupUI() {
    attachPaginationListeners();
  }
}
