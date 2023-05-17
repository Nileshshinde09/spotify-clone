import { createSlice } from "@reduxjs/toolkit";
const initialState={
    client :{openplaylistid:undefined}
}
export const ReducerSlice = createSlice({
    name:'spotify',
    initialState,
    reducers:{
        
        openplaylistAction:(state,action)=>{
            state.client.openplaylistid= action.payload
        }
    }
})

export const {openplaylistAction} = ReducerSlice.actions
export default ReducerSlice.reducer