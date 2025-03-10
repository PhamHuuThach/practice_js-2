import { buttonAction } from "../components/buttonAction";
import { breadCrumb } from "../components/breadCrumb";
export const pageHeaderView = (BREADCRUMB, BUTTON_ACTION) =>
  `<section class="page-header">
     <div class="page-title">
        <h2>Product</h2>
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <ol>
               ${breadCrumb(BREADCRUMB)}
            </ol>
        </nav>
    </div>       
    <div class="page-actions">
        ${buttonAction(BUTTON_ACTION)}
    </div>
    </section>
`;
