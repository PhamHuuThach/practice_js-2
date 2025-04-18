export function buttonAction(BUTTON_ACTION) {
  return `
    ${BUTTON_ACTION.map(
      (item) => `
        <button type="${item.TYPE}" class="${item.CLASSBUTTON}">
                    <img class="${item.CLASSICON}" src="/assets/icons/${item.ICONNAME}.svg" alt="${item.ALT}">
        <a href="/${item.HREF}">${item.VALUE} </a></button>`
    ).join("")}
    `;
}
