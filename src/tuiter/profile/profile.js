import React from "react";
import {useSelector} from "react-redux";
import {Route,Routes} from "react-router";
import {Link} from "react-router-dom";

const  ProfileComponent=(data={
    "firstName": "Jose",
    "lastName": "Annunziato",
    "handle": "@jannunzi",
    "profilePicture": "aus.jpg",
    "bannerPicture": "astronaut.jpg",
    "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast, Retuits and likes are not endorsements.",
    "website": "youtube.com/webdevtv",
    "location": "Boston, MA",
    "dateOfBirth": "7/7/1968",
    "dateJoined": "7/7/1968",
    "followingCount": 340,
    "followersCount": 223
})=> {
    const profile = useSelector((state) => state.profile)

    return(
        <>
            <div class="row">
                <Link to="/tuiter" className="col-1" style={{"color":"black"}}>
                    <i className="fa fa-arrow-left fa-sm col-1 align-middle" style={{"padding-top":"20px"}}> </i> </Link>
                <div className=" col-5"><div className="fw-bold fs-4">{profile.firstName} {profile.lastName} </div>  <div className="col-5"> {profile.tweets}</div>  </div>

            </div>
            <div className="row"><img height={300} src={`/images/${profile.bannerPicture}`}/>
            </div>
            <img className="rounded-circle border border-secondary" style={{"position":"relative","bottom":"50px","margin-left":"20px","width":"110px"}} height={120} width={120} src={`/images/${profile.profilePicture}`}/>
            <Link to="/tuiter/profile/edit-profile">
            <button className="btn btn-light border border-secondary"  style={{"float":"right","border-radius":"20px","margin-top":"10px"}}>Edit Profile</button>
            </Link>
            <div className="row"><div className="fw-bold fs-4">{profile.firstName} {profile.lastName} </div>
                <div className="text-muted"> {profile.handle}</div></div>
            <div className="mt-3">{profile.bio}</div>

            <div className="mt-3"><i className="fa fa-location-arrow me-2"></i>
                {profile.location}
                <i className="fa fa-soccer-ball-o ms-3 me-2"></i>
                Born {profile.dateOfBirth}
                <i className="fa fa-calendar ms-3 me-2"></i>
                Joined {profile.dateJoined}
                <br/>
                <span className="me-2 fw-bold">{profile.followingCount}</span> Following   <span className="me-2 ms-3 fw-bold">{profile.followersCount}</span> Followers
            </div>
        </>
    )
}
export default ProfileComponent