import { get } from "../../utilities.js";
import React, { useState, useEffect} from "react";
import { NewBubble } from "../modules/NewPostInput.js";
import BubbleCard from "../modules/BubbleCard.js";

import "./BubblePage.css";

const BubblePage = (props) => {
    const [bubbles, setBubbles] = useState([]);
    const [display, setDisplay] = useState(true);

    useEffect(() => {
      get("/api/status").then((bubbleObjs) => {
        setBubbles(bubbleObjs);
      });
    }, []);
  
    const addNewBubble = (bubbleObj) => {
      setBubbles([bubbleObj].concat(bubbles));
    };

    let bubbleList = null;
    const hasBubbles = bubbles.length !== 0;
    if (hasBubbles) {
      bubbleList = bubbles.map((bubbleObj) => {
          return (
              <BubbleCard
                  key={`Bubble_${bubbleObj._id}`}
                  bubble_id={bubbleObj._id}
                  creator_id={bubbleObj.creator_id}
                  userId={props.userId}
                  content={bubbleObj.content} />
          );
      });
    } else {
      bubbleList = <div>No bubbles :(</div>;
    }
    return (
      <>
        {<NewBubble addNewBubble={addNewBubble} />}
        {bubbleList}
      </>
    );
  };

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