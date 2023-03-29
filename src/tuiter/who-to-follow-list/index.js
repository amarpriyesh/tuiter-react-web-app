import React from "react";
//import whoArray from './who.json';
import {useSelector} from "react-redux";
import WhoToFollowListItem
    from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    const whoArray = useSelector((state)=>state.who)
    return(
        <ul className="list-group wd-margin-right">
            <li className="list-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                whoArray.map(who1 =>
                                 <WhoToFollowListItem
                                     key={who1._id}
                                     who={who1}/>
                )
            }
        </ul>
    );
};

export default WhoToFollowList