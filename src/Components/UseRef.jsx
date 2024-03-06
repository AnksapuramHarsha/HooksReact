// import React from 'react'
import { useEffect,useLayoutEffect , useRef } from "react"


const UseRef = () => {
    const paraRef=useRef()
    const inputRef=useRef();
    useEffect(()=>{
        console.log(paraRef.current);
    },[])

    useLayoutEffect(()=>{

        inputRef.current.focus()
    },[])
  return (
    <>

        <div>UseRef</div>
        <p ref={paraRef}>Hi i am Harsha</p>
        <input ref={inputRef} type="text"
        />
    </>
    
  )
}

export default UseRef