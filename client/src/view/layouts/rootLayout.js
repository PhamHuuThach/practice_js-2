// view/layouts/indexView.js
import { sidebarView } from "./sidebarView.js";
import { headerView } from "./headerView.js";
import { SIDEBAR_DATA } from "../constans.js";

export const layoutView = () => `
<div class="layout">
    ${sidebarView(SIDEBAR_DATA)}
    <div class="main-wrapper">
    ${headerView()}
    <main class="main-content" id="mainContent">
       
    </main>
    </div>
</div>`;
