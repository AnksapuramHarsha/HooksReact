// import React from 'react'

import { useState } from "react"

const UseStateForm = () => {
const initialstate=[
    {
        name:"",
        email:"",
        password:""
    }
]
  
    const [formData,setFormData]=useState(initialstate)
    const updateField=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value

        })
    }
    
  return (
    <>

        <div>UseStateForm</div>
        <form>
            name:
            <input
            name="name"
            value={initialstate.name}
            placeholder="type something!"
            onChange={updateField}
            />
            <br/>
            email:
            <input
            name="email"
            value={initialstate.email}
            placeholder="type something!"
            onChange={updateField}
            />
            <br/>
            Password:
            <input
            name="password"
            value={initialstate.password}
            placeholder="type something!"
            onChange={updateField}
            />
        </form>
        {
            <>

            <p>name:{formData.name}</p>
            <p>email:{formData.email}</p>
            <p>password:{formData.password}</p>
            </>
        }
    </>

  )
}

export default UseStateForm