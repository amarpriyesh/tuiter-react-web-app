import WhoToFollowList from "./WhoToFollowList/index1.js";
import exploreListItems from "./ExploreComponent/explore-list-item.js"
import NavigationSidebar from "./nav.js"
function exploreComponent() {
   $('#wd-explore').append(`
  <div class="row mt-3">
  
   <div class="col-3 col-lg-2 col-xl-2">
    ${NavigationSidebar("explore")}
   </div>
   <div class="col-9 col-lg-6 col-xl-6">
    ${exploreListItems("html")}
   </div>
   <div class="col-lg-4 col-xl-4 d-none d-lg-block">

 ${WhoToFollowList()}
   </div>
  </div>
  
   `);
}

$(exploreComponent);