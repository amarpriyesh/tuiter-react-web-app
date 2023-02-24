import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js"

import HomeComponent from "./HomeComponent.js"



function home() {
  $("#wd-explore").append(`
    <div class="row mt-3">  
    <div class="col-3 col-lg-2 col-xl-2">
        ${NavigationSidebar("home")}
    </div>
    <div class="col-9 col-lg-6 col-xl-6">
     ${HomeComponent()}
    </div>
    <div class="col-lg-4 col-xl-4 d-none d-lg-block">
   
   ${PostSummaryList()}
   
    </div>
    </div>
`);
}
$(home);
