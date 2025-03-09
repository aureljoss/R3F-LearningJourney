import Clicker from "./Clicker.js";
import People from "./People.js";
import { useState,useMemo } from "react";


export default function App ({children, clickersCount})
{
    const [hasClicker, setHasClicker]=useState(true)
    const [count, setCount]=useState(0)

    const toggleClick=()=>{
        setHasClicker(!hasClicker)
    }

    const increment =()=>{
        setCount(count +1)
    }

    const colorArray= useMemo(()=>{
        const colorArray= []

        for (let i=0; i<clickersCount; i++){
            colorArray.push(`hsl(${Math.random()*360}deg, 100%, 70%)`,
        )}
        return colorArray
    },[clickersCount])

      return <>
    {children}
    <div>Total count: {count}</div>
    <button onClick={toggleClick}>{hasClicker? 'hide clicker':'show clicker'}</button>
    {hasClicker && <>
    {[...Array(clickersCount)].map((value, index)=>{return <Clicker keyName={`count${index}`} color={colorArray[index]} increment={increment} key={index}/>
})}
    {/* <Clicker keyName='countA' color={`hsl(${Math.random()*360}deg, 100%, 70%)`} increment={increment}/>
    <Clicker keyName='countB' color={`hsl(${Math.random()*360}deg, 100%, 70%)`} increment={increment}/>
    <Clicker keyName='countC' color={`hsl(${Math.random()*360}deg, 100%, 70%)`} increment={increment}/> */}
    </>}
    <People/>
    </>
} 