import PostSummaryItem from "./PostSummaryItem.js"
import exploreItems from "./posts.js"


const PostSummaryList  = () => {
    return(`
   
                        <div class="row">
<ul class="list-group">
                       ${exploreItems.map(abc => PostSummaryItem(abc)).join('')}
                       </ul>
                       </div>
                      
                      
    `)
}
export  default PostSummaryList