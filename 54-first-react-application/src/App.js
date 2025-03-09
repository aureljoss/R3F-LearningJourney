import Clicker from "./Clicker.js";
import { useState } from "react";

export default function App ()
{
    const [hasClicker, setHasClicker]=useState(true)

    const toggleClick=()=>{
        setHasClicker(!hasClicker)
    }

    return <>
    <button onClick={toggleClick}>{hasClicker? 'hide clicker':'show clicker'}</button>
    {hasClicker? <Clicker/>:null}
    </>
} 