import NavigationSidebar from "../NavigationSidebar/index.js";
import indItem from "./explore-individual-item.js";
import  exploreItems from "../exploreJs/ExploreComponent/explore-items.js"

import HomeComponent from "./HomeComponent.js"



function home() {
  $("#wd-explore").append(`
    <div class="row mt-5">  
    <div class="col-3 col-lg-2 col-xl-2">
        ${NavigationSidebar("home")}
    </div>
    <div class="col-9 col-lg-6 col-xl-6">
     ${HomeComponent()}
    </div>
    <div class="col-lg-4 col-xl-4 d-none d-lg-block">
    <ul class="list-group">
   ${exploreItems.map(item => indItem(item )).join('')}
   </ul>
    </div>
    </div>
`);
}
$(home);
