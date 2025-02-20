// view/layouts/indexView.js
import { sidebarView } from "./sidebarView.js";

export const indexView = () => `
<div class="layout">
    ${sidebarView()}
    <main class="main-content">
    
    </main>
</div>`;
