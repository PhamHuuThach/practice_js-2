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

export const PAGE_HEADER_PRODUCT = {
  BUTTON_ACTION_PRODUCT: [
    {
      CLASSBUTTON: "btn btn-export",
      TYPE: "button",
      CLASSICON: "btn-icon",
      ICONNAME: "export",
      ALT: "export",
      VALUE: "Export",
      HREF: "export",
    },
    {
      CLASSBUTTON: "btn btn-add",
      TYPE: "button",
      CLASSICON: "btn-icon",
      ICONNAME: "add-ic",
      ALT: "add-ic",
      VALUE: "Add Product",
      HREF: "product/addProduct",
    },
  ],
  BREADCRUMB_PRODUCT: {
    ICONNAME1: "fi-sr-caret-right.svg",
    ICONNAME2: "",
    VALUE1: "Product List",
    VALUE2: "",
  },
};
export const PAGE_HEADER_ADD_PRODUCT = {
  BUTTON_ACTION_ADD_PRODUCT: [
    {
      CLASSBUTTON: "btn btn-export",
      TYPE: "button",
      CLASSICON: "btn-icon",
      ICONNAME: "cancel",
      ALT: "cancel",
      VALUE: "Cancel",
      HREF: "product",
    },
    {
      CLASSBUTTON: "btn btn-add",
      TYPE: "button",
      CLASSICON: "btn-icon",
      ICONNAME: "fi-sr-disk",
      ALT: "fi-sr-disk",
      VALUE: "Save Product",
      HREF: "saveProduct",
    },
  ],
  BREADCRUMB_ADD_PRODUCT: {
    ICONNAME1: "fi-sr-caret-right.svg",
    ICONNAME2: "fi-sr-caret-right.svg",
    VALUE1: "Product List",
    VALUE2: "Add Product",
  },
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
//Sidebar Menu
// Dữ liệu sidebar
export const SIDEBAR_DATA = [
  {
    TYPE: "link",
    ICON: "/assets/icons/dashboard-ic.svg",
    TEXT: "Dashboard",
    HREF: "/",
  },
  {
    TYPE: "group",
    ICON: "/assets/icons/E-Commerce-ic.svg",
    TEXT: "E-Commerce",
    HREF: "#",
    CHILDREN: [
      { TEXT: "Product", HREF: "/product" },
      { TEXT: "Categories", HREF: "/categories" },
      { TEXT: "Orders", HREF: "/orders" },
      { TEXT: "Customers", HREF: "/customers" },
    ],
  },
  {
    TYPE: "link",
    ICON: "/assets/icons/project-ic.svg",
    TEXT: "Project",
    HREF: "/project",
  },
  {
    TYPE: "link",
    ICON: "/assets/icons/contact-ic.svg",
    TEXT: "Contact",
    HREF: "/contact",
  },
  {
    TYPE: "link",
    ICON: "/assets/icons/fileManage-ic.svg",
    TEXT: "File Manager",
    HREF: "/file-manager",
  },
  {
    TYPE: "link",
    ICON: "/assets/icons/chat-ic.svg",
    TEXT: "Chat",
    HREF: "/chat",
  },
  {
    TYPE: "link",
    ICON: "/assets/icons/calendar-ic.svg",
    TEXT: "Calendar",
    HREF: "/calendar",
  },
];
//=========================
//Add Product
// constants.js
export const FORM_SECTIONS = {
  GENERAL_INFORMATION: {
    TITLE: "General Information",
    FIELDS: [
      {
        ID: "productName",
        LABEL: "Product Name",
        TYPE: "text",
        PLACEHOLDER: "Type product name here...",
      },
      {
        ID: "description",
        LABEL: "Description",
        TYPE: "textarea",
        PLACEHOLDER: "Type product description here...",
        ROWS: 5,
      },
    ],
  },
  MEDIA: {
    TITLE: "Media",
    FIELDS: [
      {
        ID: "photo",
        LABEL: "Photo",
        TYPE: "file",
        ICON_SRC: "/assets/icons/fi-sr-picture.svg",
      },
    ],
  },
  PRICING: {
    TITLE: "Pricing",
    FIELDS: [
      {
        ID: "basePrice",
        LABEL: "Base Price",
        TYPE: "text",
        PLACEHOLDER: "Type base price here...",
        PREFIX: "$",
      },
      {
        ID: "discountType",
        LABEL: "Discount Type",
        TYPE: "select",
        OPTIONS: [
          { VALUE: "percentage", LABEL: "Percentage" },
          { VALUE: "fixed", LABEL: "Fixed Amount" },
          { VALUE: "none", LABEL: "No Discount" },
        ],
      },
      {
        ID: "discountPercentage",
        LABEL: "Discount Precentage (%)",
        TYPE: "text",
        PLACEHOLDER: "Type discount precentage...",
      },
      {
        ID: "taxClass",
        LABEL: "Tax Class",
        TYPE: "select",
        OPTIONS: [
          { VALUE: "standard", LABEL: "Standard Rate" },
          { VALUE: "reduced", LABEL: "Reduced Rate" },
          { VALUE: "zero", LABEL: "Zero Rate" },
        ],
      },
      {
        ID: "vatAmount",
        LABEL: "VAT Amount (%)",
        TYPE: "text",
        PLACEHOLDER: "Type VAT amount...",
      },
    ],
  },
  INVENTORY: {
    TITLE: "Inventory",
    FIELDS: [
      {
        ID: "sku",
        LABEL: "SKU",
        TYPE: "text",
        PLACEHOLDER: "Type product SKU here...",
      },
      {
        ID: "barcode",
        LABEL: "Barcode",
        TYPE: "text",
        PLACEHOLDER: "Product barcode...",
      },
      {
        ID: "quantity",
        LABEL: "Quantity",
        TYPE: "text",
        PLACEHOLDER: "Type product quantity here...",
      },
    ],
  },
  CATEGORY: {
    TITLE: "Category",
    FIELDS: [
      {
        ID: "productCategory",
        LABEL: "Product Category",
        TYPE: "select",
        OPTIONS: [
          { VALUE: "electronics", LABEL: "Electronics" },
          { VALUE: "clothing", LABEL: "Clothing" },
          { VALUE: "food", LABEL: "Food & Beverages" },
          { VALUE: "furniture", LABEL: "Furniture" },
          { VALUE: "beauty", LABEL: "Beauty & Personal Care" },
        ],
      },
    ],
  },
  STATUS: {
    TITLE: "Status",
    BADGE: "Draft",
    FIELDS: [
      {
        ID: "productStatus",
        LABEL: "Product Status",
        TYPE: "select",
        OPTIONS: [
          { VALUE: "draft", LABEL: "Draft" },
          { VALUE: "published", LABEL: "Published" },
          { VALUE: "archived", LABEL: "Archived" },
        ],
      },
    ],
  },
};
