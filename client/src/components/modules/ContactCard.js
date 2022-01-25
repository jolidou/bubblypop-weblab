import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import ProfileCard from "./ProfileCard.js"

const ContactCard = (props) => {

    let url = "/other-profile/" + props.recipient;

  return (
    <>
        <Link to={url}>
            {props.recipient}
          </Link>
      <hr></hr>
    </>
  );
};

export default ContactCard;