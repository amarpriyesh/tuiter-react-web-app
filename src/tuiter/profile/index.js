import React from "react";
import {useSelector} from "react-redux";
const  ProfileComponent=()=> {
    const profile = useSelector((state) => state.profile)
    return(<><h4>Profile</h4>
        <div><img src={"/images/java.png"}/></div>
    </>)
}
export default ProfileComponent