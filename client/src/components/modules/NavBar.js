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