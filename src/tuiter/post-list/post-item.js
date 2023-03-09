import React from "react";
const PostItem = (
    {
        post = {
            "author": "Elon Musk",
            "userName": "elonmusk",
            "time": "23h",
            "title1": "Amazing show about ",
            "link" : "@inspiration4x",
            "title2":" mission!",
            "avatarImage": "starship.jpeg",
            "postImageUrl": "astrounout.jpg",
            "postContent": {
                "postHeading":
                    "Countdown: Inspirational Mission to Space | Netflix Official site",
                "postContent":
                    "From training to launch to landing, this all-access docuseries rides along with the Inpiration4 crew on the first all-civilian orbital space ...",
                "postSiteLink": "netflix.com"
            },
            "numberOfComments": "4.2k",
            "numberOfRetweets": "3.5k",
            "numberOfLikes": "37.5k"
        }
    }
) => {
    return(
        <>

        <li className="list-group-item"
            style={{"border-radius":"0px"}}>

            <div className="row">
                <div className="col-1">
                    <img src={`/images/${post.avatarImage}`} width={60} height={60}
                         style={{"margin-top": "5px", "border-radius": "50%"}}/>
                </div>

                <div className="col-11" style={{"padding-left":"18px"}}>
                    <div>
                          <span>
                              <b>{post.author}</b>
                              <i className="fa fa-check-circle" aria-hidden="true"></i>
                          </span>

                        <span className="text-muted">
                              @{post.userName} - ${post.time}
                          </span>

                        <span style={{"float":"right"}}>&#183;&#183;&#183;</span>
                    </div>
                    <div>
                        {post.title1}<a href='#'>{post.link}</a>{post.title2}
                    </div>
                    <div className="mt-2">
                        <img
                            src={`/images/${post.postImageUrl}`}
                            style={{"border-radius": "20px 20px 0 0", "width":"100%", "height": "410px","object-fit": "cover"}}
                        />
                        {
                            post.postContent &&

                            <div class="pt-2"
                              style={{"padding": "12px", "border-radius": "0 0 15px 15px", "border": "1px solid rgba(255,255,255,.25)",
                                              "border-top":"none"}}>
                                      {post.postContent.postHeading} <br />
                                      <span class="text-muted">
                                          {post.postContent.postContent} <br />
                                          <i class="fa fa-link" aria-hidden="true"></i> {post.postContent.postSiteLink}
                                      </span>
                                  </div>

                        }
                        {
                            !post.postContent && <div>""</div>

                        }
                        <div className="p-2 d-flex justify-content-between text-muted">
                            <i className="fa fa-comment-o" aria-hidden="true"
                               style={{"font-weight":"310"}}>
                                  <span style={{"margin-left": "6px"}}>{
                                      post.numberOfComments
                                  }</span>
                            </i>

                            <i className="fa fa-retweet" aria-hidden="true">
                                  <span style={{"margin-left": "6px", "font-weight":"110"}}>{
                                      post.numberOfRetweets
                                  }</span>
                            </i>

                            <i className="fa fa-heart-o" aria-hidden="true" style={{"font-weight":"110"}}>
                                  <span style={{"margin-left": "6px"}}>{
                                      post.numberOfLikes
                                  }</span>
                            </i>

                            <i className="fa fa-upload" aria-hidden="true"
                               style={{"font-weight":"610"}}> </i>
                        </div>

                    </div>
                </div>

            </div>
        </li></>
    )
}
export default PostItem;