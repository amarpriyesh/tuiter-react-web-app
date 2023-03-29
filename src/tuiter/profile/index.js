import React from "react";
import {useSelector} from "react-redux";
import {Route,Routes} from "react-router";
import ProfileComponent from "./profile";
import EditProfile from "./edit-profile";

const Profile = () => {
    return(
        <Routes>
            <Route index
                   element={<ProfileComponent/>}/>
            <Route path="/edit-profile"
                   element={<EditProfile/>}/>
        </Routes>
    )
}
export default Profile