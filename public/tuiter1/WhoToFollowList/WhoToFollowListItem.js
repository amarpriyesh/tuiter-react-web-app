
const whoToFollowListItem = (who) => {

    return(`<li class="list-group-item"><div  >
    <div class="row ">
        <div class="col-2">
            
           
             <img src="${who.avatarIcon}"
                                 class="wd-image-icon rounded-circle"
                   />
                       
        </div>
        <div class="col-7 ">
          <div class="wd-float-left wd-text-bold wd-side-column-font-size">${who.userName}</div>
                            <i class="fa fa-check-circle wd-float-left pt-1"></i>
                            <br>
                            <div>@${who.handle}</div>
             <br>
             
        </div>
        <div class="col-3 ">
      <div class="row">
             <button type="button" class="btn btn-primary btn-block rounded-pill">Follow</button>
                            
           </div>
        </div>
        
    </div>

</div></li>`
    )


}
export default whoToFollowListItem