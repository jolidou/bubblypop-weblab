import { get } from "../../utilities.js";
import React, { useState, useEffect } from "react";
import { NewBubble } from "../modules/NewPostInput.js";
import BubbleCard2 from "../modules/BubbleCard2.js";

import "./BubblePage.css";

/*TO DO: Problem--

  Refreshing the page required to see new status update
       "      "   "   causes the bubble popping to reset
  How to fix? 

*/

const BubblePage = (props) => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    get("/api/statuses").then((bubblesExisting) => {
      setBubbles(bubblesExisting);
    });
  }, []);


  const addNewBubble = (bubbleObj) => {
    setBubbles([bubbleObj].concat(bubbles));
  };

  let bubbleList = null;
  const hasBubbles = bubbles.length !== 0;
  if (hasBubbles) {
    bubbleList = bubbles.map((bubbleObj) => (
      <div className = "floating">
        <BubbleCard2
          key={`Bubble_${bubbleObj._id}`}
          bubble_id={bubbleObj._id}
          creator_id={bubbleObj.user} //refers to the ID of the creator of the bubble
          userId={props.userId} //refers to the ID of the current user
          content={bubbleObj.content}
        />
      </div>
    ));
  } else {
    bubbleList = <div>No bubbles :(</div>;
  }
  return (
    <>
      <h1>Pop Bubbles to Make New Bubs :)</h1>
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

/* const PopBubble = (props) => {
  function hideDiv() {
    document.getElementsByClassName("displayed").style.display="block";
  }

  return (
    <div className="displayed">
      <form method="POST">
          <input type="button" name="popBubble" className="enter submit" value="Pop!"  onclick="hideDiv()" />
      </form>
    </div>
    {props.contacts.concat(props.creator_id)};
  )
} */

export default BubblePage /*,  PopBubble */;
