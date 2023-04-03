import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";


const TuitItem = (

    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

        }
    }
) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <>

            <li className="list-group-item"
                style={{"border-radius":"0px"}}>

                <div className="row">
                    <div className="col-1">
                        <img src={`/images/${tuit.image}`} width={60} height={60}
                             style={{"margin-top": "5px", "border-radius": "50%"}}/>
                    </div>

                    <div className="col-11" style={{"padding-left":"18px"}}>
                        <div>
                          <span>
                              <b>{tuit.userName}</b>
                              <i className="fa fa-check-circle" style={{"color":"blue"}} aria-hidden="true"></i>
                          </span>
                            {' '}

                            <span className="text-muted">
                              {tuit.handle} - ${tuit.time}
                          </span>
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>


                        </div>

                        <div className="mt-2">

                            {


                                <div class="pt-2"
                                     style={{"padding": "12px", "border-radius": "0 0 15px 15px", "border": "1px solid rgba(255,255,255,.25)",
                                         "border-top":"none"}}>
                                    <span class="text-muted">
                                          {tuit.tuit}

                                      </span>
                                </div>

                            }

                            <div className="p-2 d-flex justify-content-between text-muted">
                                <i className="fa fa-comment-o" aria-hidden="true"
                                   style={{"font-weight":"310"}}>
                                  <span style={{"margin-left": "6px"}}>{
                                      tuit.replies
                                  }</span>
                                </i>

                                <i className="fa fa-retweet" aria-hidden="true">
                                  <span style={{"margin-left": "6px", "font-weight":"110"}}>{
                                      tuit.retuits
                                  }</span>
                                </i>

                                { tuit.likes>0 && <i  onClick={() => dispatch(updateTuitThunk({
                                                                                ...tuit,
                                                                                likes: tuit.likes + 1
                                                                            }))} className="fa fa-heart" aria-hidden="true" style={{"font-weight":"110","color":"red"}}>
                                  <span style={{"margin-left": "6px","color":"black"}}>{
                                      tuit.likes
                                  }</span>
                                </i>}

                                { tuit.likes===0 && <i  onClick={() => dispatch(updateTuitThunk({
                                                                                                  ...tuit,
                                                                                                  likes: tuit.likes + 1
                                                                                              }))} className="fa fa-heart-o" aria-hidden="true" >
                                  <span style={{"margin-left": "6px","color":"black"}}>{
                                      tuit.likes
                                  }</span>
                                </i>}


                                {tuit.dislikes > 0 &&  <i  onClick={() => dispatch(updateTuitThunk({
                                                                                ...tuit,
                                                                                dislikes: tuit.dislikes + 1
                                                                            }))} className="fa fa-thumbs-down" aria-hidden="true" style={{"font-weight":"110","color":"black"}}>
                                  <span style={{"margin-left": "6px","color":"black"}}>{
                                      tuit.dislikes
                                  }</span>
                                </i>}
                                {tuit.dislikes === 0 &&  <i  onClick={() => dispatch(updateTuitThunk({
                                                                                                       ...tuit,
                                                                                                       dislikes: tuit.dislikes + 1
                                                                                                   }))} className="fa fa-thumbs-o-down" aria-hidden="true" >
                                  <span style={{"margin-left": "6px","color":"black"}}>{
                                      tuit.dislikes
                                  }</span>
                                </i>}

                                <i className="fa fa-share-alt" aria-hidden="true"
                                   style={{"font-weight":"610"}}> </i>
                            </div>

                        </div>
                    </div>

                </div>
            </li></>
    )
}
export default TuitItem;