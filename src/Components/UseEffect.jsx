// import React from 'react'
import {useState,useEffect} from 'react'
const UseEffect = () => {
    const[count,setCount]=useState(0)
    const[showText,setShowText]=useState(false)

    const increment =()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        console.log("hii user")
    },[])

    useEffect(()=>{
        if(count===5 ){
            setShowText(!showText)
        }
    },[count])
  return (
    <>

        <div>UseEffect</div>
        <p>count:{count}</p>
        {
            showText?<p>Hello World</p>:<p></p>
        }
        
        <button onClick={increment}>click here</button>
    </>
  )
}

export default UseEffect