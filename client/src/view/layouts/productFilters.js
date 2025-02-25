import { search } from "../components/search";
import { SEARCH_DATA_PRODUCT } from "../constans";
export const productFilters = () => `
<div class="product-filters">
    <nav class="tabs" role="tablist" aria-label="Product filters">
        <button role="tab" aria-selected="true" class="tab active">
            All Product
        </button>
        <button role="tab" aria-selected="false" class="tab">
            Published
        </button>
        <button role="tab" aria-selected="false" class="tab">
            Low Stock
        </button>
        <button role="tab" aria-selected="false" class="tab">
            Draft
        </button>
    </nav>
     ${search(
       SEARCH_DATA_PRODUCT.CLASSSEARCH,
       SEARCH_DATA_PRODUCT.CLASSINPUT,
       SEARCH_DATA_PRODUCT.PLACEHOLDER,
       SEARCH_DATA_PRODUCT.ARIALABEL
     )}
</div>`;
