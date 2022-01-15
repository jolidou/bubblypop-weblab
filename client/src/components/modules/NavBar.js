import React from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "1587080949981-lmcaeo0kcv8rkcb4c38lcs8gr084338r.apps.googleusercontent.com";

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
            {userId ? (
            <GoogleLogout
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={handleLogout}
                onFailure={(err) => console.log(err)}
            />
            ) : (
            <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={handleLogin}
                onFailure={(err) => console.log(err)}
            />
            )}
        </nav>
    )
}

export default NavBar;