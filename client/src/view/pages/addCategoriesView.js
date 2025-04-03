//addCategoties
import { pageHeaderView } from "../layouts/pageHeaderView";
import { PAGE_HEADER_ADD_CATEGORY } from "../constans";
export class addCategoriesView {
  render(container) {
    container.innerHTML = `
         ${pageHeaderView(
           PAGE_HEADER_ADD_CATEGORY.TITLE,
           PAGE_HEADER_ADD_CATEGORY.BREADCRUMB_ADD_CATEGORY,
           PAGE_HEADER_ADD_CATEGORY.BUTTON_ACTION_ADD_CATEGORY
         )}
         <div class="category-form-container">
            <div class="category-form-left">
                <div class="form-section">
                    <h2 class="section-title">Thumbnail</h2>
                    <div class="form-group">
                        <label for="photo">Photo</label>
                        <div class="upload-area">
                        <figure class="upload-image">
                        <img id="" src="/assets/icons/fi-sr-picture.svg" alt="fi-sr-picture.svg" />
                             </figure>
                        <p>Drag and drop image here, or click add image</p>
                        <label for="file-upload" class="custom-file-upload">
                            Add Image
                        </label>
                        <input id="file-upload" type="file" hidden>
                        </div>
                    </div>
                </div>
            </div>
            <div class="category-form-right">
                <div class="form-section">
                    <h2 class="section-title">General Information</h2>
                    <div class="form-group">
                        <label for="categoryName">Category Name</label>
                        <input type="text" id="categoryName" class="form-control" placeholder="Type category name here...">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea id="description" class="form-control" rows="5" placeholder="Type category description here..."></textarea>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}
