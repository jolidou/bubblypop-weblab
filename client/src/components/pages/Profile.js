import { get } from "../../utilities.js";
import React, { useState, useEffect } from "react";
import ProfileCard from "../modules/ProfileCard.js";

import "../../utilities.css";
import "./Profile.css";

const Profile = (props) => {
/*     const [counter, setCounter] = useState(0);
    const [user, setUser] =  useState();

    useEffect(() => {
        document.title = "Profile";
        get(`/api/profile`, { id: props.googleid }).then((userObj) => setUser(userObj));
    }, []);

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    if (!user) {
        return (<div>Profile</div>)
    } */

    return (
        <>
            <div>
                <ProfileCard 
                    userId={props.userId}
                    avatarURL={props.avatarURL}
                    content={props.content}
                    display={props.display}
                    bubbleCount={props.bubbleCount}
                    members = {props.members} //TODO: link googleid of contacts-- add to api.js
                />
            </div>
        </>
    )
}

export default Profile;