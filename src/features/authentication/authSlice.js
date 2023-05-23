//import createSlice from reduxtk
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    authState:'logged Out'
}
//create a slice object
const authSlice = createSlice({
    //name of slice   
    name:'auth',
    //initialstate
    initialState,
        //reducers object,
    reducers:{
       // listens for an action change
        loggedIn:(state)=>{
            state.authState = "logged in"
        },
        loggedOut:(state)=>{
            state.authState = "logged Out"
        }
    }
})
//export indivual actions
//export entire reducers
export const {loggedIn,loggedOut} = authSlice.actions;
export default authSlice.reducer;