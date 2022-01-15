import React, { useState } from "react";

const AddBubble = (props) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit &&props.onSubmit(value);
    }

    return (
        <div>
            <input 
                type="text"
                placeholder={props.defaultText}
                value={value}
                onChange={handleChange}
            />
            <button 
                type="submit"
                value="Submit"
                onClick={handleSubmit}
            >
                Update Status
            </button>
        </div>
    );
};

const StatusUpdate = (props) => {
    const updateStatus = (value) => {
        console.log(value);
    };

    return <AddBubble defaultText="New Status Update" onSubmit={updateStatus}/>
}

export default StatusUpdate;