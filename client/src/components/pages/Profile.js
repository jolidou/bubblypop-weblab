import { get } from "../../utilities.js";
import React, { useState, useEffect } from "react";

import "../../utilities.css";
import "./Profile.css";

const Profile = (props) => {
    const [counter, setCounter] = useState(0);
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
    }

    return (
        <>
            <div className="Profile-avatarContainer">
                <div className="Profile-avatar"></div>
                <div className="Profile-name u-textCenter">Amandager</div>
                <div>
                <form action="/edit-profile/" method="get">
                    <button>Edit Profile</button>
                </form>
                </div>
            </div>
            <div>
                <div>Bubble Count:</div>
                <div>{user.counter}</div>
            </div>
            <div>
{/*                 <div>Contacts</div>
                <span>{contact.friend}</span>
                <span>{contact.romantic}</span>
                <span>{contact.professional}</span>
                <span>{contact.undecided}</span> */}
            </div>
        </>
    )
}

export default Profile;