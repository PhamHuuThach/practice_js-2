//Add products view
import { pageHeaderView } from "../layouts/pageHeaderView";
import { PAGE_HEADER_ADD_PRODUCT, FORM_SECTIONS } from "../constans";
import { createFormSection } from "../components/formProduct";
export class addProductView {
  render(container) {
    container.innerHTML = `
        ${pageHeaderView(
          PAGE_HEADER_ADD_PRODUCT.BREADCRUMB_ADD_PRODUCT,
          PAGE_HEADER_ADD_PRODUCT.BUTTON_ACTION_ADD_PRODUCT
        )}
        <form class="product-form-container">
          <div class="product-form-left">
            ${createFormSection(FORM_SECTIONS.GENERAL_INFORMATION)}
            ${createFormSection(FORM_SECTIONS.MEDIA)}
            ${createFormSection(FORM_SECTIONS.PRICING)}
            ${createFormSection(FORM_SECTIONS.INVENTORY)}
          </div>
          <div class="product-form-right">
            ${createFormSection(FORM_SECTIONS.CATEGORY, true)}
            ${createFormSection(FORM_SECTIONS.STATUS, true)}
          </div>
        </form>
      `;
  }
}
