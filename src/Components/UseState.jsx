// import React from 'react'

import { useState } from "react"

const UseState = () => {

const [toggleText,setToggleText]=useState(false);
const [inputText,setInputText]=useState(" ");

const handleToggle=()=>{
    setToggleText(!toggleText)
}

const handleInput=(e)=>{
    setInputText([e.target.name]=e.target.value)
}


  return (
    <>

        <div>UseState</div>
        {
            toggleText? <p>Hello Harsha</p>:<p>user is busy</p>
        }
        <button onClick={handleToggle}>toggle</button>
        <hr/>


        <div>
            <input
            type="text"
            name="input"
            value={inputText}
            placeholder="enter something..."
            onChange={handleInput}
            />
        </div>
        {
            <p>name is : {inputText}</p>
        }
        
    </>
  )
}

export default UseState