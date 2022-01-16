import React from "react";
import { Link } from "@reach/router";

const Status = (props) => {
    return (
        <div>
            <Link to={`/profile/${props.userId}`}>
                {props.content}
            </Link>
        </div>
    )
}

export default Status;