import React from "react";

const NavBar = (props) => {
    return(
        <nav>
            <div>Bubble Pop!</div>
            <Link to="/">
                BubblePage
            </Link>
            {props.userID && (
                <Link to={`/profile/${props.userID}`}>
                    Profile
                </Link>
            )}
        </nav>
    )
}