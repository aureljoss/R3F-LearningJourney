import {useState, useEffect, useRef} from 'react'

export default function Clicker ({keyName, color, increment}){

	const [count, setCount]= useState(parseInt(localStorage.getItem(keyName)??0))

	const buttonRef= useRef()

	useEffect(()=>{
		buttonRef.current.style.backgroundColor='papayawhip'
		return ()=>{localStorage.removeItem(keyName)}
	},[])

	useEffect(()=>{
		localStorage.setItem(keyName,count)
	},[count])

	const buttonClick = ()=>{
		setCount(count +1)
		increment()
	}

    return <div>
                <div style={{color:color}}>Clicks count: {count}</div>
                <button ref={buttonRef} onClick={buttonClick}>Click me</button>
            </div>
}