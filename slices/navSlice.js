import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  origin : {
    location: {
    lat: 37.78825,
    lng : -122.4324
  } } ,
  destination : {
    location: {
    lat: 37.79925,
    lng : -122.8324
  } } ,
  travelTimeInformation : null 
}
export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducer : {
      setOrigin : (state, action) => {
          state.origin =action.payload ;
          
    } ,
      setDestination : (state , action)=> {
        state.destination =action.payload ;
     } ,
     setTravelTimeInformation : (state , action)=> {
        state.travelTimeInformation =action.payload ;
     },
  },
 
})

// Action creators are generated for each case reducer function
export const { setDestination, setOrigin, setTravelTimeInformation } = navSlice.actions


export default navSlice.reducer

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeinformation = (state) => state.nav.travelTimeInformation;