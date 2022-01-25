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
    const body = { user: props.user, type: props.type, content: value };
    post("/api/socialMedia", body).then((social) => {
      // display this comment on the screen
      props.addNewSocial(social);
    });
  };

  return <NewPostInput defaultText={props.defaultText} onSubmit={addSocial} />;
};

const NewBubble = (props) => {
  const updateStatus = (content) => {
    const body = { user: props.user, name: props.name, content: content };
    post("/api/status", body).then((status) => {
      props.addNewBubble(status);
    });
  };

  return <NewPostInput defaultText="Update Status" onSubmit={updateStatus} />;
};

const NewStatus = (props) => {
  const addStatus = (value) => {
    const body = { user: props.user, content: value, name: props.name };
    post("/api/status", body).then((status) => {
      props.addNewStatus(status);
    });
  };

  return <NewPostInput defaultText={props.defaultText} onSubmit={addStatus} />;
};

// const NewAvatar = (props) => {
//   const addAvatar = (value) => {
//     const body = { user: props.user, content: value };
//     post("/api/avatar", body).then((avatar) => {
//       props.addNewAvatar(avatar);
//     });
//   };

//   return <NewPostInput defaultText={props.defaultText} onSubmit={addAvatar} />;
// };

const NewAvatar = (props) => {
  const [value, setValue] = useState("");

  const addAvatar = (value) => {
    const body = { user: props.user, content: value };
    post("/api/avatar", body).then((avatar) => {
      props.addNewAvatar(avatar);
    });
  };

  // called when the user hits "Submit" for a new post
  const handleSubmit = (event) => {
    event.preventDefault();
    addAvatar(value);
    setValue("");
  };

  const encode = () => {
    var selectedfile = document.getElementById("myinput").files;
    if (selectedfile.length > 0) {
      var imageFile = selectedfile[0];
      var fileReader = new FileReader();
      fileReader.onload = function (fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result;
        console.log(srcData);
        setValue(srcData);
        var newImage = document.createElement("img");
        newImage.src = srcData;
        newImage.style.width = "300px";
        newImage.style.height = "auto";
        document.getElementById("dummy").innerHTML = newImage.outerHTML;
        // console.log(document.getElementById("dummy").innerHTML);
      };
      fileReader.readAsDataURL(imageFile);
    }
  };

  return (
    <div>
      <input id="myinput" type="file" onChange={encode} />
      <br></br>
      <button
        type="submit"
        className="NewPostInput-button u-pointer"
        value="Submit"
        onClick={handleSubmit}
      >
        Upload
      </button>
      <div id="dummy"></div>
    </div>
  );
};

export { NewSocial, NewBubble, NewStatus, NewAvatar };
