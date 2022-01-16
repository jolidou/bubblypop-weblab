import React, { useState } from "react";

import "./NewPostInput.css";
import { post } from "../../utilities";

/**
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {string} storyId optional prop, used for comments
 * @param {({storyId, value}) => void} onSubmit: (function) triggered when this post is submitted, takes {storyId, value} as parameters
 */
const NewPostInput = (props) => {
  const [value, setValue] = useState("");

  // called whenever the user types in the new post input box
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // called when the user hits "Submit" for a new post
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(value);
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        className="NewPostInput-input"
      />
      <button
        type="submit"
        className="NewPostInput-button u-pointer"
        value="Submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

/**
 * New Comment is a New Post component for comments
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {string} storyId to add comment to
 */
const NewSocial = (props) => {
  const addSocial = (value) => {
    const body = { content: value };
    post("/api/socialMedia", body).then((social) => {
      // display this comment on the screen
      props.addNewSocial(social);
    });
  };

  return <NewPostInput defaultText="New Social" onSubmit={addSocial} />;
};

/**
 * New Story is a New Post component for comments
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 */
// const NewStory = (props) => {
//   const addStory = (value) => {
//     const body = { content: value };
//     post("/api/story", body).then((story) => {
//       // display this story on the screen
//       props.addNewStory(story);
//     });
//   };

//   return <NewPostInput defaultText="New Story" onSubmit={addStory} />;
// };

// /**
//  * New Message is a New Message component for messages
//  *
//  * Proptypes
//  * @param {UserObject} recipient is the intended recipient
//  */
// const NewMessage = (props) => {
//   const sendMessage = (value) => {
//     const body = { recipient: props.recipient, content: value };
//     post("/api/message", body);
//   };

//   return <NewPostInput defaultText="New Message" onSubmit={sendMessage} />;
// }

export { NewSocial };
