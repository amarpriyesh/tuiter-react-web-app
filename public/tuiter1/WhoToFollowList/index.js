import whoToFollowListItem from "./WhoToFollowListItem.js"
import listItem  from "./who.js";

const WhoToFollowList = () => {
    return( `<ul class="list-group">
 <div class="list-group-item">
                    Who to follow
                </div>
${listItem.map( who => whoToFollowListItem(who) ).join('')}
</ul>`) }

export default WhoToFollowList;