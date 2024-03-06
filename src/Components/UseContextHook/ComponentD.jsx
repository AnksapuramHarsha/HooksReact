// import React from 'react'
import {useContext} from "react"
import { UserContext } from "./ComponentA"


const ComponentD = () => {
    const user=useContext(UserContext)
  return (
    <>
    
        <div className="box1">
            <h3>ComponentD</h3>
            <p>{`Hello ${user}`}</p>
        </div>
    </>
  )
}

export default ComponentD