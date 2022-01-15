import React, { useState, useEffect } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "1587080949981-lmcaeo0kcv8rkcb4c38lcs8gr084338r.apps.googleusercontent.com";

const Profile = (props) => {

    return (
        <>
            <div>
                <div>{props.user.avatarURL}</div>
                
                <div>/* Name */</div>
            </div>
            <div>
                <div>Bubble Count:</div>
                <div>/* BubbleCount */</div>
            </div>
            <div>
                <div>Contacts</div>
                <div>/* Contacts List*/</div>
            </div>
        </>
    )
}
