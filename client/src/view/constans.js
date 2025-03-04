export const SEARCH_DATA = {
  CLASSSEARCH: "search-form",
  CLASSINPUT: "search-input",
  PLACEHOLDER: "Search",
  ARIALABEL: "Global-search",
};

export const SEARCH_DATA_PRODUCT = {
  CLASSSEARCH: "search-product",
  CLASSINPUT: "search-input",
  PLACEHOLDER: "Search products...",
  ARIALABEL: "Search products",
};

export const BUTTON_ACTION = [
  {
    CLASSBUTTON: "btn btn-export",
    TYPE: "button",
    CLASSICON: "btn-icon",
    ICONNAME: "export",
    ALT: "export",
    VALUE: "Export",
  },
  {
    CLASSBUTTON: "btn btn-add",
    TYPE: "button",
    CLASSICON: "btn-icon",
    ICONNAME: "add-ic",
    ALT: "add-ic",
    VALUE: "Add Product",
  },
];

export const BREADCRUMB = {
  ICONNAME1: "fi-sr-caret-right.svg",
  ICONNAME2: "",
  VALUE1: "Product List",
  VALUE2: "",
};
//=========================
// Thead of product table
export const TABLE_HEADERS = [
  { id: 1, title: "Product", hasCheckbox: true, hasSortIndicator: true },
  { id: 2, title: "SKU", hasSortIndicator: false },
  { id: 3, title: "Category", hasSortIndicator: false },
  { id: 4, title: "Stock", hasSortIndicator: true },
  { id: 5, title: "Price", hasSortIndicator: true },
  { id: 6, title: "Status", hasSortIndicator: true },
  { id: 7, title: "Added", hasSortIndicator: true },
  { id: 8, title: "Action", hasSortIndicator: false },
];
export const IMAGE_TABLE = {
  CHECKBOX_ICON: "brick.svg",
  SORT_INDICATOR_ICON: "fi-sr-caret-down.svg",
};
export const PAGINATION_PAGE = {
  CURRENT_PAGE: 1,
  ITEMS_PER_PAGE: 4,
};
//=========================
