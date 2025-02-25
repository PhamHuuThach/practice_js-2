import { BUTTON_ACTION, BREADCRUMB } from "../constans";
import { buttonAction } from "../components/buttonAction";
import { breadCrumb } from "../components/breadCrumb";
export const pageHeaderView = () =>
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
