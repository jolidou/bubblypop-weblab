import React from "react";
import { Link } from "@reach/router";

import "./BubbleCounter.css";

const BubbleCounter = (props) => {
    return(
        <div className = "bubbleCounterContainer">
            <div className = "bubbleCounterText">
                {props.count}
            </div>
        </div>
    )
}

export default BubbleCounter;