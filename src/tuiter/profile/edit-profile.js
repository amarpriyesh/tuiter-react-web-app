import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {editProfile} from "../reducer/profile-reducer"
import profile from "./profile";

const EditProfile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile)



    const [profileTmp,setProfile] = useState(profile)
    let profile1 = {profile}


    const save=() =>{
            dispatch(editProfile(profileTmp))
        navigate("/tuiter/profile")


    }
    return(

            <>
                <div class="row">
                    <Link to="/tuiter/profile" className="col-1" style={{"padding-top":"15px"}}>
                        <i className="bi bi-x-lg  align-middle" > </i> </Link> <div className="fw-bold fs-4 col-9" style={{"padding-top":"10px"}}>Edit Profile</div> <button className="btn btn-dark border border-secondary m-2 float-right" onClick={()=>save()}  style={{"float":"right","border-radius":"20px","width":"100px"}}>Save</button>

                </div>
                <div className="row"><img height={300} src={`/images/${profile.bannerPicture}`}/>
                </div>
                <img className="rounded-circle border border-secondary" style={{"position":"relative","bottom":"50px","margin-left":"20px"}} height={120} width={120} src={`/images/${profile.profilePicture}`}/>
<div>

    <form action="profile.html">

        <div className="border border-secondary rounded-3 p-2 mb-3">
            <label htmlFor="first-name">First name</label>
            <input id="first-name"
                   className="p-0 form-control border-0"
                   type="text" onChange={event => setProfile({...profileTmp,"firstName":event.target.value})} value={profileTmp.firstName}/>
        </div>
        <div className="border border-secondary rounded-3 p-2 mb-3">
            <label htmlFor="last-name">Last name</label>
            <input id="last-name"
                   className="p-0 form-control border-0"
                   onChange={event => setProfile({...profileTmp,"lastName":event.target.value})} value={profileTmp.lastName}/>
        </div>
        <div className="border border-secondary rounded-3 p-2 mb-3">
            <label htmlFor="bio">Bio</label>
            <textarea
                className="p-0 form-control border-0"
                id="bio" onChange={event => setProfile({...profileTmp,"bio":event.target.value})}>{profileTmp.bio}</textarea>
        </div>

        <div className="border border-secondary rounded-3 p-2 mb-3">
            <label htmlFor="date-of-birth">Date of birth</label>
            <input id="date-of-birth"
                   className="p-0 form-control border-0"
                   type="date" value={profileTmp.dateOfBirth} onChange={event => setProfile({...profileTmp,"dateOfBirth":event.target.value})}/>
        </div>

        <div className="border border-secondary rounded-3 p-2 mb-3">
            <label htmlFor="website">Website</label>
            <input id="website"
                   className="p-0 form-control border-0"
                   type="text" value={profileTmp.website} onChange={event => setProfile({...profileTmp,"website":event.target.value})}/>
        </div>

        <div className="border border-secondary rounded-3 p-2 mb-3">
            <label htmlFor="handle">Handle</label>
            <input id="handle"
                   className="p-0 form-control border-0"
                   type="text" value={profileTmp.handle} onChange={event => setProfile({...profileTmp,"handle":event.target.value})}/>
        </div>


    </form>
</div>
            </>

    )


}

export default EditProfile