// view/layouts/sidebarView.js
export const sidebarView = () => `
    <aside class="sidebar">
        <div class="sidebar-header">
            <div class="logo">
                <img src="./src/assets/img/Logo.png" alt="Pixlab Logo" class="logo-icon">
                <span class="logo-text">Pixlab</span>
            </div>
        </div>
        <nav class="sidebar-nav">
            <div class="nav-group">
                <a href="#" class="nav-item">
                <img class="nav-icon" src="./src/assets/icons/dashboard-ic.svg" alt="dashboard-ic.svg">
                    <span>Dashboard</span>
                </a>
                <div class="nav-item-wrapper">
                <a href="#" class="nav-item nav-item-show-group">
                    <img class="nav-icon" src="./src/assets/icons/E-Commerce-ic.svg" alt="E-Commerce-ic.svg">
                    <span>E-Commerce</span>
                    <img class="nav-indicator" src="./src/assets/icons/fi-sr-caret-down.svg" alt="fi-sr-caret-down.svg">
                </a>
                <div class="nav-group-sub">
                        <a href="#" class="nav-item">
                            <span>Product</span>
                        </a>
                        <a href="#" class="nav-item">
                            <span>Categories</span>
                        </a>
                        <a href="#" class="nav-item">
                            <span>Orders</span>
                        </a>
                        <a href="#" class="nav-item">
                            <span>Customers</span>
                        </a>
                    </div>
                </div>  
                 <a href="#" class="nav-item">
                    <img class="nav-icon" src="./src/assets/icons/project-ic.svg" alt="project-ic.svg">
                    <span>Project</span>
                </a>
                <a href="#" class="nav-item">
                    <img class="nav-icon" src="./src/assets/icons/contact-ic.svg" alt="contact-ic.svg">
                    <span>Contact</span>
                </a>
                <a href="#" class="nav-item">
                    <img class="nav-icon" src="./src/assets/icons/fileManage-ic.svg" alt="fileManage-ic.svg">
                    <span>File Manager</span>
                </a>
                <a href="#" class="nav-item">
                    <img class="nav-icon" src="./src/assets/icons/chat-ic.svg"   alt="chat-ic.svg">
                    <span>Chat</span>
                </a>
                <a href="#" class="nav-item">
                    <img class="nav-icon" src="./src/assets/icons/calendar-ic.svg" alt="calendar-ic.svg">
                    <span>Calendar</span>
                </a>
            </div>
        </nav>
    </aside>
`;
