// import React from 'react'
import { useState, createContext } from "react"
import ComponentB from "./ComponentB"

export const UserContext=createContext()

const ComponentA = () => {
    // eslint-disable-next-line no-unused-vars
    const [user,setUser]=useState("Harsha")
  return (
    <>

            <div className="box">
                <h3>ComponentA</h3>
                <p>{`Hello ${user}`}</p>
                <UserContext.Provider value={user}>
                    <ComponentB/>   
                </UserContext.Provider>
            </div>
        

    </>
  )
}

export default ComponentA