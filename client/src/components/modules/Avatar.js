import React from "react";
import { Link } from "@reach/router";

import "./Avatar.css";

const Avatar = (props) => {
    return(
        <div>
            <Link to={`/profile/${props.userId}`}>
                <img src={props.avatarURL} class="rounded"/>
            </Link>
        </div>
    );
};

export default Avatar;