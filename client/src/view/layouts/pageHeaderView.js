import { buttonAction } from "../components/buttonAction";
import { breadCrumb } from "../components/breadCrumb";
export const pageHeaderView = (TITLE, BREADCRUMB, BUTTON_ACTION) =>
  `<section class="page-header">
     <div class="page-title">
        <h2>${TITLE}</h2>
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
