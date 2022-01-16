import React from "react";
import { Link } from "@reach/router";


const Contact = (props) => {
    return(
        <div>
            <Link to={`/profile/${props.userId}`}>
                {props.members}
            </Link>
        </div>
    )
}

export default Contact;