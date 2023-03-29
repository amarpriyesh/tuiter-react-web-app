import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import TuitList from "../tuits/";
import WhatsHappening from "./whats-happening"
import PostList from "../post-list";
const HomeComponent  = () => {
    return(
        <>
            <h2>Home</h2>
            <div className="row">
                <WhatsHappening/>
            </div>

            <TuitList/>
        </>
    );
};
export default HomeComponent;


