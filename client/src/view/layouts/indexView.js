// view/layouts/indexView.js
import { sidebarView } from "./sidebarView.js";
import { headerView } from "./headerView.js";
import { pageHeaderView } from "./pageHeaderView.js";
import { productFilters } from "./productFilters.js";
import { table } from "../components/table.js";

export const indexView = () => `
<div class="layout">
    ${sidebarView()}
    <div class="main-wrapper">
    ${headerView()}
    <main class="main-content">
        ${pageHeaderView()}
        <section class="product-section">
        ${productFilters()}
        ${table()}
        </section>
    </main>
    </div>
</div>`;
