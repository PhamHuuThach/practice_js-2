export const SEARCH_DATA = {
  CLASSSEARCH: "search-form",
  CLASSINPUT: "search-input",
  PLACEHOLDER: "Search",
  ARIALABEL: "Global-search",
};

export const SEARCH_DATA_PRODUCT = {
  CLASSSEARCH: "search-product",
  CLASSINPUT: "search-input-product",
  PLACEHOLDER: "Search products...",
  ARIALABEL: "Search products",
};

export const SEARCH_DATA_CATEGORY = {
  CLASSSEARCH: "search-category",
  CLASSINPUT: "search-input-category",
  PLACEHOLDER: "Search categories...",
  ARIALABEL: "Search categories",
};

export const PAGE_HEADER_PRODUCT = {
  TITLE: "Product",
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
  TITLE: "Add Product",
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
      ICONNAME: "add-ic",
      ALT: "add-ic",
      VALUE: "Add Product",
      HREF: "addProduct",
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
export const TABLE_HEADERS_PRODUCT = [
  { id: 1, title: "Product", hasCheckbox: true, hasSortIndicator: true },
  { id: 2, title: "SKU", hasSortIndicator: false },
  { id: 3, title: "Category", hasSortIndicator: false },
  { id: 4, title: "Stock", hasSortIndicator: true },
  { id: 5, title: "Price", hasSortIndicator: true },
  { id: 6, title: "Status", hasSortIndicator: true },
  { id: 7, title: "Added", hasSortIndicator: true },
  { id: 8, title: "Action", hasSortIndicator: false },
];
export const IMAGE_TABLE_PRODUCT = {
  CHECKBOX_ICON: "brick.svg",
  SORT_INDICATOR_ICON: "fi-sr-caret-down.svg",
};
export const PAGINATION_PAGE_PRODUCT = {
  CURRENT_PAGE: 1,
  ITEMS_PER_PAGE: 4,
};
//Example product data
export const dataProduct = [
  {
    id: "302011",
    name: "Smartwatch E2",
    variants: "2 Variants",
    image: "/assets/img/Logo.png",
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
    image: "/assets/img/Logo.png",
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
    image: "/assets/img/Logo.png",
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
    image: "/assets/img/Logo.png",
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
    image: "/assets/img/Logo.png",
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
    image: "/assets/img/Logo.png",
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
    image: "/assets/img/Logo.png",
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
    image: "/assets/img/Logo.png",
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
    image: "/assets/img/Logo.png",
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
    image: "/assets/img/Logo.png",
    category: "Watch",
    stock: 204,
    price: 590.0,
    status: "Published",
    added: "24 Dec 2022",
  },
];

//=========================
//Categories
export const PAGE_HEADER_CATEGORY = {
  TITLE: "Categories",
  BUTTON_ACTION_CATEGORY: [
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
      VALUE: "Add Categories",
      HREF: "category/addCategory",
    },
  ],
  BREADCRUMB_CATEGORY: {
    ICONNAME1: "fi-sr-caret-right.svg",
    ICONNAME2: "",
    VALUE1: "Category List",
    VALUE2: "",
  },
};
//=========================
export const PAGE_HEADER_ADD_CATEGORY = {
  TITLE: "Add Category",
  BUTTON_ACTION_ADD_CATEGORY: [
    {
      CLASSBUTTON: "btn btn-export",
      TYPE: "button",
      CLASSICON: "btn-icon",
      ICONNAME: "cancel",
      ALT: "cancel",
      VALUE: "Cancel",
      HREF: "category",
    },
    {
      CLASSBUTTON: "btn btn-add",
      TYPE: "button",
      CLASSICON: "btn-icon",
      ICONNAME: "add-ic",
      ALT: "add-ic",
      VALUE: "Add Category",
      HREF: "addCategory",
    },
  ],
  BREADCRUMB_ADD_CATEGORY: {
    ICONNAME1: "fi-sr-caret-right.svg",
    ICONNAME2: "fi-sr-caret-right.svg",
    VALUE1: "Category List",
    VALUE2: "Add Category",
  },
};
// Categories Table Headers
export const TABLE_HEADERS_CATEGORY = [
  {
    id: "1",
    title: "Category Name",
    hasCheckbox: true,
    hasSortIndicator: true,
  },
  {
    id: "2",
    title: "Sold",
    hasCheckbox: false,
    hasSortIndicator: true,
  },
  {
    id: "3",
    title: "Stock",
    hasCheckbox: false,
    hasSortIndicator: true,
  },
  {
    id: "4",
    title: "Added",
    hasCheckbox: false,
    hasSortIndicator: true,
  },
  {
    id: "5",
    title: "Action",
    hasCheckbox: false,
    hasSortIndicator: false,
  },
];

export const IMAGE_TABLE_CATEGORY = {
  CHECKBOX_ICON: "brick.svg",
  SORT_INDICATOR_ICON: "fi-sr-caret-down.svg",
};
// Example Categories Data
export const dataCategory = [
  {
    id: 1,
    name: "Bag & Pouch",
    description: "Great fashion, great selections, great prices.",
    image: "/assets/img/Logo.png",
    sold: "12,100",
    stock: 10,
    added: "29 Dec 2022",
  },
  {
    id: 2,
    name: "Watch",
    description:
      "Our range of watches are perfect whether you're looking to upgrade.",
    image: "/assets/img/Logo.png",
    sold: "59,000",
    stock: 204,
    added: "24 Dec 2022",
  },
  {
    id: 3,
    name: "Audio",
    description:
      "Our big range of audio devices makes it easy to upgrade your device at a great price.",
    image: "/assets/img/Logo.png",
    sold: "12,500",
    stock: 48,
    added: "12 Dec 2022",
  },
  {
    id: 4,
    name: "Smartphone",
    description: "Our smartphone include all the big brands.",
    image: "/assets/img/Logo.png",
    sold: "34,800",
    stock: 401,
    added: "21 Oct 2022",
  },
  {
    id: 5,
    name: "Shoes",
    description: "Whatever your activity needs are, we've got you covered.",
    image: "/assets/img/Logo.png",
    sold: "60,700",
    stock: 120,
    added: "21 Oct 2022",
  },
  {
    id: 6,
    name: "Mouse",
    description: "Our mouses include all the big brands.",
    image: "/assets/img/Logo.png",
    sold: "23,400",
    stock: 432,
    added: "21 Oct 2022",
  },
  {
    id: 7,
    name: "Toys",
    description: "Get the perfect gift for the little ones.",
    image: "/assets/img/Logo.png",
    sold: "76,000",
    stock: 0,
    added: "19 Sep 2022",
  },
  {
    id: 8,
    name: "Laptop",
    description: "Our laptop include all the big brands.",
    image: "/assets/img/Logo.png",
    sold: "400",
    stock: 347,
    added: "19 Sep 2022",
  },
  {
    id: 9,
    name: "Games",
    description: "We have the perfect gear for you.",
    image: "/assets/img/Logo.png",
    sold: "812",
    stock: 299,
    added: "19 Sep 2022",
  },
  {
    id: 10,
    name: "Camera",
    description:
      "You'll find exactly what you're looking for with our huge range of cameras.",
    image: "/assets/img/Logo.png",
    sold: "123",
    stock: 38,
    added: "10 Aug 2022",
  },
];
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
    HREF: "#/",
    CHILDREN: [
      { TEXT: "Product", HREF: "/product" },
      { TEXT: "Categories", HREF: "/category" },
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
        PLACEHOLDER: "Select a discount type",
        OPTIONS: [
          { VALUE: "percentage", LABEL: "Percentage" },
          { VALUE: "fixed", LABEL: "Fixed Amount" },
          { VALUE: "none", LABEL: "No Discount" },
        ],
      },
      {
        ID: "discountPercentage",
        LABEL: "Discount Percentage (%)",
        TYPE: "text",
        PLACEHOLDER: "Type discount percentage...",
      },
      {
        ID: "taxClass",
        LABEL: "Tax Class",
        TYPE: "select",
        PLACEHOLDER: "Select a tax class",
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
        PLACEHOLDER: "Select a category",
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
        PLACEHOLDER: "Select product status",
        OPTIONS: [
          { VALUE: "draft", LABEL: "Draft" },
          { VALUE: "published", LABEL: "Published" },
          { VALUE: "archived", LABEL: "Archived" },
        ],
      },
    ],
  },
};
