export function createFormField(field) {
  switch (field.TYPE) {
    case "text":
    case "number":
      return `
        <div class="form-group">
          <label for="${field.ID}">${field.LABEL}</label>
          ${
            field.PREFIX
              ? `<div class="input-wrapper">
                  <span class="input-prefix">${field.PREFIX}</span>
                  <input type="${field.TYPE}" id="${field.ID}" class="form-control" placeholder="${field.PLACEHOLDER}">
                </div>`
              : `<input type="${field.TYPE}" id="${field.ID}" class="form-control" placeholder="${field.PLACEHOLDER}">`
          }
        </div>
      `;
    case "textarea":
      return `
        <div class="form-group">
          <label for="${field.ID}">${field.LABEL}</label>
          <textarea id="${field.ID}" class="form-control" rows="${
        field.ROWS || 3
      }" placeholder="${field.PLACEHOLDER}"></textarea>
        </div>
      `;
    case "select":
      return `
        <div class="form-group">
          <label for="${field.ID}">${field.LABEL}</label>
          <div class="select-wrapper">
            <select id="${field.ID}" class="form-control">
              <option value="" disabled selected>${
                field.PLACEHOLDER || `Select a ${field.LABEL.toLowerCase()}`
              }</option>
              ${field.OPTIONS.map(
                (option) =>
                  `<option value="${option.VALUE}">${option.LABEL}</option>`
              ).join("")}
            </select>
            <img class="select-arrow" src="/assets/icons/fi-sr-caret-down.svg" alt="dropdown">
          </div>
        </div>
      `;
    case "file":
      return `
        <div class="form-group">
          <label for="${field.ID}">${field.LABEL}</label>
          <div class="upload-area">
            <figure class="upload-image">
              <img src="${field.ICON_SRC}" alt="Upload icon" class="upload-icon">
            </figure>
            <p>Drag and drop image here, or click add image</p>
            <label for="file-upload" class="custom-file-upload">
                Add Image
            </label>
            <input id="file-upload" type="file" hidden>
          </div>
        </div>
      `;
    default:
      return "";
  }
}

export function createFormSection(section, isRightSection = false) {
  return `
    <div class="form-section">
      ${
        isRightSection && section.BADGE
          ? `
        <div class="section-header">
          <h2 class="section-title">${section.TITLE}</h2>
          <span class="status-badge">${section.BADGE}</span>
        </div>
      `
          : `
        <h2 class="section-title">${section.TITLE}</h2>
      `
      }
      <div class="section-content ${section.TITLE.toLowerCase()}">
        ${section.FIELDS.map((field) => createFormField(field)).join("")}
      </div>
    </div>
  `;
}
