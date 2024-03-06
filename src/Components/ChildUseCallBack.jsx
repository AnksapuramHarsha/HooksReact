// import React from 'react'
import {memo} from "react"

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const ChildUseCallBack = ({text,onClick}) => {
    console.log("child is rendered",text)
  return (
    <>
        <button onClick={onClick}>{text}</button>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(ChildUseCallBack)