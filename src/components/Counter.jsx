

// eslint-disable-next-line react/display-name,react/prop-types
import React from "react";

// eslint-disable-next-line react/display-name,react/prop-types
const Counter = React.memo(({ count, onIncrement }) => {
    console.log("🔄 Counter rendered");
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={onIncrement}>Increment</button>
        </div>
    );
});

export { Counter };


