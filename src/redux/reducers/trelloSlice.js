import { createSlice } from "@reduxjs/toolkit";
import { regions } from "../../assets/mock-data/data";


const initialState = {
   data: regions, 
   liked: [],
   columnsFromBackend:[
    {
     id: '11',
     name: "Want to go",
     items: [],
   },
    {
     id: '22',
     name: "Traveling",
     items: []
     },
    {
     id: '33',
     name: "i've been here",
     items: []
   },
  ],
  
};


export const trelloSlice = createSlice({
  name: "trello",
  initialState,
  reducers: {
    test: (state)=>{
      state.data.forEach((el)=>{ 
      if(el.liked===true){
        state.columnsFromBackend[0].items.push(el)
      }
      })
    },
    favorite: (state, action ) => {

        const idx = state.data.findIndex(
            (product) => product.id === action.payload.id
          );
          console.log(state.data[idx].liked)
          state.data[idx].liked = action.payload.liked
          state.liked.push(state.data[idx])
          state.columnsFromBackend[0].items.push(state.data(idx))
    },


    setLoginByGoogle: (state, action) => {
      state.isLogged = true;
      state.user = action.payload.user;
      localStorage.setItem("jwt-token", action.payload.token);
    },
  },
});

export const { favorite, setLoginByGoogle, test } = trelloSlice.actions;
export default trelloSlice.reducer;