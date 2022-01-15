import { get } from "../../utilities.js";
import React, { useState, useEffect} from "react";
import { StatusUpdate } from "../modules/AddBubble.js";

import "./BubblePage.css";

const BubblePage = (props) => {
    return (
        <div>
            <div>
                
            </div>
            <StatusUpdate userId={props.status.content} status={props.status.content} display={props.bubble.display}/>
        </div>
    );
}

/* const PopBubble = (props) => {
    const [bubbleDisplay, setBubbleDisplay] = useState();

    useEffect(() => {
        get({parent: props.bubble.display}).then((display))
    })
    
    return (
        <div>
            Popped Bubble
        </div>
    )
}
 */
export default BubblePage;