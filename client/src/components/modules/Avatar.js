import React from "react";
import { Link } from "@reach/router";

import "./Avatar.css";

const Avatar = (props) => {
    return(
        <div>
            {/* <Link to={`/profile/`}> */}
                <img src={props.avatarURL} className="rounded"/>
            {/* </Link> */}
        </div>
    );
};

export default Avatar;