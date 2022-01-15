import { get } from "../../utilities.js";
import React, { useState, useEffect } from "react";

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
            <div>
                <div>{user.avatarURL}</div>
                <div>{user.name}</div>
                <div>
                <form style="display: inline" action="http://example.com/" method="get">
                    <button>Visit Website</button>
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