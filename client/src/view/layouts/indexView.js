// view/layouts/indexView.js
import { sidebarView } from "./sidebarView.js";
import { headerView } from "./headerView.js";
import { pageHeaderView } from "./pageHeaderView.js";

export const indexView = () => `
<div class="layout">
    ${sidebarView()}
    <div class="main-wrapper">
    ${headerView()}
    <main class="main-content">
        ${pageHeaderView()}
    </main>
    </div>
</div>`;
