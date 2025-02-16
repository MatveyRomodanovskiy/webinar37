import  { useState, useCallback } from "react";
import {Counter} from "./components/Counter";
import {ChildButton} from "./components/ChildButton";

const App = () => {
    console.log("🔄 App rendered");

    const [count, setCount] = useState(0);

    // Используем useCallback, чтобы не пересоздавать функции
   const increment = () => {
        setCount((prev) => prev + 1);
   };

    const handleClick = useCallback(() => {
        console.log("✅ Button clicked");
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>React useCallback Example</h1>
            <Counter count={count} onIncrement={increment} />
            <ChildButton onClick={handleClick} />
        </div>
    );
};

export default App;
