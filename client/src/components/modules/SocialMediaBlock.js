import React from "react";
import SocialMedia from "./SocialMedia.js";

/* Creates social media block based on if the social media's display is true */

const SocialMediaBlock = (props) => {
    let displayedSocialMedia = socials.filter(socialMedia => socialMedia.display === True)

    return (
        <div>
            {displayedSocialMedia.map((socialMedia) => (
                <SocialMedia 
                    userId={props.userId}
                    type={props.type}
                />
            ))}
        </div>
    )
}