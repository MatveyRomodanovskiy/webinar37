import React from "react";

// eslint-disable-next-line react/prop-types,react/display-name
const ChildButton = React.memo(({ onClick }) => {
    console.log("🔄 ChildButton rendered");
    return <button onClick={onClick}>Click me</button>;
});


export {ChildButton};
