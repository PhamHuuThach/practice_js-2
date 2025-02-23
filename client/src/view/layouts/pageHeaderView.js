export const pageHeaderView = () =>
  `<section class="page-header">
     <div class="page-title">
        <h2>Product</h2>
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <ol>
                <li><a href="#">Dashboard</a></li>
                <img class="nav-indicator" src="./src/assets/icons/fi-sr-caret-right.svg" alt=" ">
                <li aria-current="page">Product List</li>
            </ol>
        </nav>
    </div>       
    <div class="page-actions">
        <button type="button" class="btn btn-export">
            <img class="btn-icon" src="./src/assets/icons/export.svg" alt="export">
            Export
        </button>
        <button type="button" class="btn btn-add">
            <img class="btn-icon" src="./src/assets/icons/add-ic.svg" alt="add-ic">
            Add Product
        </button>
    </d </section>
`;
