export function search(CLASSSEARCH, CLASSINPUT, PLACEHOLDER, ARIALABEL) {
  return `
            <form class="${CLASSSEARCH}" role="search">
                    <img src="assets/icons/search-ic.svg" alt="search-ic">
                    <input type="search" placeholder="${PLACEHOLDER}" class="${CLASSINPUT}" aria-label="${ARIALABEL}">
                </form>
        `;
}
