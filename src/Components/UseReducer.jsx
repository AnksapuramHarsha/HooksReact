import {useReducer} from 'react'

const initialState={
    count:0,
    showCount:true
}

function reducer(state,action){
    // console.log(state);
    // console.log(action);
    switch(action.type){
        case "add":
            return{
                ...state,
                count:state.count+1
            }
            case "subtract":
                return{
                    ...state,
                    count:state.count-1
                }
                case "reset":
                    return{
                        ...state,
                        count:0
                    }
                    case "toggle":
                        return{
                            ...state,
                            showCount:!state.showCount
                        }
                          
                
                default:
                    return state
    }

}
const UseReducer = () => {
    const[state,dispatch]=useReducer(reducer,initialState)
    // console.log(state);
  return (
    <>
        <div style={{display:"flex",flexDirection:"column", width:"300px",gap:"10px"}}>
            <h3>UseReducer</h3>
            {
                state.showCount? <p>Count:{state.count}</p>:null
            }
            
            <button onClick={()=>dispatch({type:"add"})}>increment</button>
            <button onClick={()=>dispatch({type:"subtract"})}>decrement</button>
            <button onClick={()=>dispatch({type:"reset"})}>reset</button>
            <button onClick={()=>dispatch({type:"toggle"})}>enable/disable Count</button>
            
        </div>


    </>
  )
}

export default UseReducer