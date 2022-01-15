import { get } from "../../utilities.js";
import React, { useState, useEffect} from "react";
import { StatusUpdate } from "../modules/AddBubble.js";

import "./BubblePage.css";

const BubblePage = (props) => {

    return (
        <div>
            <div>
                status update
            </div>
            <StatusUpdate userId={props.status.googleId} status={props.status.content} display={props.bubble.display}/>
        </div>
    );
}


/* 

Basically what I want to do is change props.bubble.display = False when event onClick; each bubble is a div

*/
/* const PopBubble = (props) => {
    const [display, setBubbleDisplay] = useState(true);
    
    get({parent: props.bubble.display}).then((display) => {
        setBubbleDisplay({
            display: false, 
        })
    })
    
    return (
        <div>
            <div onClick={() => setBubbleDisplay({
                    display: false, 
                })}>
                
            </div>
        </div>
    )
} */

export default BubblePage;