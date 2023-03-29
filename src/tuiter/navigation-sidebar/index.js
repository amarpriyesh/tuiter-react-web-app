import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import  "./index.css"
const NavigationSidebar = (

                            ) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <>
        <div className="list-group wd-margin-left d-none d-lg-block">
            <Link to="/tuiter/" className={`list-group-item ${active === '/'?'active':''}`}>
                <i className="fa fa-twitter fa-2x" style={{"color":"blue"}}></i> Tuiter
            </Link>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="fa fa-home"></i>  Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="fa fa-hashtag"></i>   Explore
            </Link>
            <Link to="/" className="list-group-item">
                <i className="fa fa-laptop"></i> Labs
            </Link>

        <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
            <i className="fa fa-bell"></i>  Notifications
        </a>
        <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
            <i className="fa fa-envelope"></i>  Messages
        </a>
        <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
            <i className="fa fa-bookmark"></i>  Bookmarks
        </a>
        <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
            <i className="fa fa-list"></i> Lists
        </a>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="fa fa-user"></i>   Profile
            </Link>

        <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
            <i className="fa fa-minus-circle"></i> More
        </a>
            <div className="row pt-2 pe-2 ">
                <button type="button"
                        className="btn btn-primary btn-lg btn-block rounded-pill width1">Tweet
                </button>
            </div>
    </div>



    <div className="list-group wd-margin-left d-lg-none">
        <a className="list-group-item"> <i className="fa fa-twitter fa-2x" style={{"color":"blue"}}></i>   </a>
        <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
            <i className="fa fa-home"></i>
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
            <i className="fa fa-hashtag"></i>
        </Link>
        <Link to="/" className="list-group-item">
            <i className="fa fa-laptop"></i>
        </Link>

        <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
            <i className="fa fa-bell"></i>
        </a>
        <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
            <i className="fa fa-envelope"></i>
        </a>
        <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
            <i className="fa fa-bookmark"></i>
        </a>
        <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
            <i className="fa fa-list"></i>
        </a>
        <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
            <i className="fa fa-user"></i>
        </Link>
        <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
            <i className="fa fa-minus-circle"></i>
        </a>
        <div className="row pt-3 pe-2">
            <button type="button"
                    className="btn btn-primary btn-lg btn-block rounded-pill width1">Tweet
            </button>
        </div>
    </div>

            </>

    )

};
export default NavigationSidebar;