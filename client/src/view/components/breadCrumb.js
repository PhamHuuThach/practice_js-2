export function breadCrumb(BREADCRUMB) {
  return `
    <li><a href="#">Dashboard</a></li>
                <img class="nav-indicator" src="./../public/assets/icons/${BREADCRUMB.ICONNAME1}" alt="${BREADCRUMB.ICONNAME1}">
                <li aria-current="page">${BREADCRUMB.VALUE1}</</li>
                <img class="nav-indicator-2" src="./../public/assets/icons/${BREADCRUMB.ICONNAME2}" alt="${BREADCRUMB.ICONNAME2}">
                <li aria-current="page">${BREADCRUMB.VALUE2}</li>
    `;
}
