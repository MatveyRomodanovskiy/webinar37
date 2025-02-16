import React from "react";

// eslint-disable-next-line react/prop-types
const ChildButton = ({ onClick }) => {
    console.log("🔄 ChildButton rendered");
    return <button onClick={onClick}>Click me</button>;
};


export {ChildButton};
