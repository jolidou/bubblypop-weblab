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
  const [user, setUser] = useState("");
  const [bubbles, setBubbles] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    get(`/api/user`, { userid: props.user }).then((userObj) => {
      setUser(userObj);
    });
  }, []);

  useEffect(() => {
    get("/api/statuses").then((bubblesExisting) => {
      setBubbles(bubblesExisting);
    })

  }, []);


  // const [contactIds, setContactIds] = useState([]);
  // const hasContacts = contacts.length !== 0;
  // if (hasContacts) {
  //   setContactIds(contacts.map((contactObj) => {
  //     contactObj.recipient
  //   }))
  // } 

  // const addContact = (newContactId) => {
  //   setContactIds([newContactId].concat(contactIds));
  // }; 

  const addNewBubble = (bubbleObj) => {
    setBubbles([bubbleObj].concat(bubbles));
  };

  // console.log(contacts);

  let bubbleList = null;
  const hasBubbles = bubbles.length !== 0;
  if (hasBubbles) {
    bubbleList = bubbles.map((bubbleObj) => (
      bubbleObj.user !== props.user &&
      <div className = "floating u-divCenter" key = {`BubbleContainer_${bubbleObj._id}`}>
        {
          <BubbleCard2
              key={`Bubble_${bubbleObj._id}`}
              bubble_id={bubbleObj._id}
              creator_id={bubbleObj.user} //refers to the ID of the creator of the bubble
              name = {bubbleObj.name}
              userId={props.user} //refers to the ID of the current user
              content={bubbleObj.content}
              // contacts={contacts}
              // addContact={addContact}
          />
        }
      </div>
    ));
  } else {
    bubbleList = <div className = "noBubbles">No bubbles :(</div>;
  }
  return (
    <>
      <div className = "bubblePageContainer">
        <div className = "bubblePageTitleContainer">
          pop bubbles to make new bubs! :)
        </div>
        {<NewBubble addNewBubble={addNewBubble} user={props.user} name = {user.name} />}
        {/* <div className = "bubbleListContainer"> */}
          <div className = "wrapper">
            {bubbleList} 
          </div> 
        {/* </div> */}
      </div>
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
