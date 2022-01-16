import React from "react";
import { Link } from "@reach/router";

const BubbleCounter = (props) => {
    return(
        <div>
            <Link to={`/profile/${props.userId}`}>
                {props.count}
            </Link>
        </div>
    )
}

export default BubbleCounter;