import React from "react";

const toggle = () => {

    const onClickToggle = () => {
        document.body.classList.toggle('active');
    }

    return (
    <button id="container" 
    onClick = {onClickToggle}
    >
    Background
    </button>
    );
};

export default toggle;