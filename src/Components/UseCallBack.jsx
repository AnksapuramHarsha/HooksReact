// import React from 'react'

import { useCallback, useState } from "react"
import ChildUseCallBack from "./ChildUseCallBack";

const UseCallBack = () => {
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);

    const memorize1func=useCallback(()=>{setCount1(count1+1)},[count1])
    const memorize2func=useCallback(()=>{setCount2(count2+1)},[count2])


  return (
    <>  
        <div>UseCallBack</div>
        {count1}
            <ChildUseCallBack text={'btn1'} onClick={memorize1func}/>
            <ChildUseCallBack text={'btn2'} onClick={memorize2func}/>
        {count2}
    </>
  )
}

export default UseCallBack