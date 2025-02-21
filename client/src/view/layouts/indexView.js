// view/layouts/indexView.js
import { sidebarView } from "./sidebarView.js";
import { headerView } from "./headerView.js";

export const indexView = () => `
<div class="layout">
    ${sidebarView()}
    <div class="main-wrapper">
    ${headerView()}
    </div>
</div>`;
