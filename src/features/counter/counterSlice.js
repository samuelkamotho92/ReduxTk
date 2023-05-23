import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count : 0
}
export const counterSlice = createSlice(
    {
        name:"counter",
        initialState,
        reducers:{
            increment:(state)=>{
                state.count += 1
            },
            decrement:(state)=>{
                state.count -= 1
            },
            incrementByAmount:(state,action)=>{
                state.value += action.payload
            }
        }

    }
)
//export indivual actions
//export entire reducers
export const {increment,decrement,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer