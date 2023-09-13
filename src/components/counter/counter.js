import { useState } from "react";
// import './counter.css'

export default function Counter() {

    const [count, setCount] = useState(0)

    const handelIncrement = () => {
        setCount((oldValue) => oldValue + 1)
    }

    const handelDecrement = () => {
        setCount((oldValue) => oldValue - 1)
    }

    const handelReset = () => {
        setCount(0)
    }



    return (
        <div>
            <div>
                <h1>{count}</h1>
                <div>
                    <button onClick={handelIncrement}>Increment</button>
                    <button onClick={handelDecrement}>Decrement</button>
                    <button onClick={handelReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}