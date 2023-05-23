import React from 'react'
//import  useSelctor and useDispatch
//import slice actions
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,incrementByAmount } from './counterSlice';

const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()
    return (
    <div>
        <div>
            <button 
            onClick={()=>dispatch(increment())}
            >
                +
            </button>
            <span>{count}</span>
            <button 
            onClick={()=>dispatch(decrement())}
            >
                -
            </button>
        </div>
    </div>
  )
}

export default Counter