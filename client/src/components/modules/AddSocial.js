import React, { useState, useEffect, useCallback } from "react";
import "../../utilities.css";

import { get } from "../../utilities";

const Social = (props) => {
    const [social, setSocial] = useState("");
  
    useEffect(() => {
      // In case of id changed, reset component state
      setSocial("");

      get(`/api/socialMedia`, { googleid: props.user.googleid , type: props.type}).then((socialObj) => {
        setSocial(socialObj);
      });
    }, [props.user]);

    return (
        <div>
        Current: {(social === "") ? "N/A" : social} 
        </div>
    )
  }

export default Social