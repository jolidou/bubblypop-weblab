import React from "react";
import { Link } from "@reach/router";


const Avatar = (props) => {
    return(
        <div>
            <Link to={`/profile/${props.userId}`}>
                <img src={props.avatarURL} />
            </Link>
        </div>
    );
};

export default Avatar;