import { search } from "../components/search";
export const productFilters = (SEARCH_DATA) => `
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
       SEARCH_DATA.CLASSSEARCH,
       SEARCH_DATA.CLASSINPUT,
       SEARCH_DATA.PLACEHOLDER,
       SEARCH_DATA.ARIALABEL
     )}
</div>`;
