import React from "react";
import { Link } from "@reach/router";


const SocialMedia = (props) => {
    return (
        <div>
            <Link to={`/profile/${props.userId}`}>
                <button>{props.type}</button>
            </Link>
        </div>
    )
}

export default SocialMedia