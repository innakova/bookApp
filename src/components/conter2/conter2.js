import { useState } from "react";
import { MyButton } from "../UI/Buttons/MyButton";

export default function Conter2 () {
    const [num, setNum] = useState(0)
    const handelDecrement5 = () => {
        setNum((old) => (old) + 1)
    }
    const handelIncrement5 = () => {
        setNum((old) => (old) - 1)
    }
    const handelRes = () => {
        setNum(0)
    }

    return (
        <div>
            <h1>{num}</h1>
            <div>
                <MyButton onClick={handelDecrement5}>+</MyButton>
                <MyButton onClick={handelIncrement5}>-</MyButton>
                <MyButton onClick={handelRes}>*</MyButton>
            </div>
        </div>
    )
}