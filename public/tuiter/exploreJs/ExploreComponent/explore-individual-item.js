
const indItem = (item) => {
    return (`
    
       <li class="list-group-item">  <div class="wd-font-size pt-3 pb-3 row">
                        <div class="col-9">
                                <div class="wd-title pt-1">${item.topic} </div>
                                <div class="wd-float-left wd-text-bold">${item.userName} </div>
                                <i class="fa fa-check-circle wd-float-left pt-1"></i>
                                <div class="wd-float-left wd-duration"> - ${item.time} </div>
                                 <div style="clear;">&nbsp;</div>
                                <div class="wd-text-bold">
                                    ${item.title}
                                </div>
                                <div class="wd-title pt-1">${item.tweets} Tweets</div>
                            </div>

                            <div class="col-3">
                                <img src="${item.image}"
                                     class="wd-image-style pt-1 float-right"
                                />
                            </div>
                        
                            
                   </div>     </li> `)

}

export default indItem