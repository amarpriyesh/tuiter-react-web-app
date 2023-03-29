import React from "react";
//import postsArray from './posts.json';
import PostItem
    from "./post-item";
import {useSelector} from "react-redux";

const PostList = () => {
    const postsArray = useSelector((state)=>state.posts)
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                                   <PostItem
                                       key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostList;