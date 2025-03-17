import { search } from "../components/search";
import { SEARCH_DATA } from "../constans";

export const headerView = () => `
            <header class="main-header">
                ${search(
                  SEARCH_DATA.CLASSSEARCH,
                  SEARCH_DATA.CLASSINPUT,
                  SEARCH_DATA.PLACEHOLDER,
                  SEARCH_DATA.ARIALABEL
                )}
                <nav class="header-actions" aria-label="User navigation">
                    <div class="notification-group">
                        <button class="icon-button" aria-label="Calendar">
                            <img src="/assets/icons/calendar-ic.svg" alt="calendar.svg">
                        </button>
                        <button class="icon-button" aria-label="Notifications">
                            <img src="/assets/icons/notification-ic.svg" alt="notifications.svg">
                            <span class="badge" aria-label="2 unread messages">2</span>
                        </button>
                        <button class="icon-button" aria-label="Email">
                            <img src="/assets/icons/email-ic.svg" alt="email.svg">
                            <span class="badge" aria-label="5 unread messages">5</span>
                        </button>
                    </div>
                    
                    <div class="user-profile" role="button" tabindex="0" aria-haspopup="true">
                         <img src="/assets/img/Logo.png" alt="Logo.png" class="avatar">
                        <div class="user-info">
                            <span class="user-name">Jay Hargudson</span>
                            <span class="user-role">Manager</span>
                        </div>
                        <img class="nav-indicator" src="/assets/icons/fi-sr-caret-down.svg" alt="fi-sr-caret-down.svg">
                    </div>
                </nav>
            </header>
`;
