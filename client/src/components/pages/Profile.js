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
        <div className="u-flexRow Flex-fullPage">
            <div className="Profile-avatarContainer">
                <div className="Profile-avatar"><img src={user.avatarURL}/></div>
                <div className="Profile-name u-textCenter">{user.name}</div>
                <div className="u-divCenter">
                <form action="/edit-profile/" method="get" className="u-divCenter">
                    <button>Edit Profile</button>
                </form>
                </div>
            </div>
            <div className="">
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
        </div>
        </>
    )
}

export default Profile;