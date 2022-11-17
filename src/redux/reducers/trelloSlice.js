import { createSlice } from "@reduxjs/toolkit";
import { regions } from "../../assets/mock-data/data";
import {v4} from 'uuid'

const initialState = {
   data: regions, 
   liked: [],
   columnsFromBackend:{
   [v4()]: {
     id: v4(),
     name: "Want to go",
     items: [
      {
        id: v4(),
        img: './regions/bishkek.png',
        text: "Весь Кыргызстан",
        liked: false,
      },
      {
        id: v4(),
        img: './regions/chui.png',
        liked: false,
        text: "Чуйская область"
      },],
   },
   [v4()]: {
     id: v4(),
     name: "Traveling",
     items: []
     },
   [v4()]: {
     id: v4(),
     name: "i've been here",
     items: []
   },
  
}
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
         
          state.data[idx].liked = action.payload.liked
          state.liked.push(state.data[idx])
          state.columnsFromBackend[0].items.push(state.data(idx))
    },
    // sort: (state, action) => {
    //   const { droppableIdStart,
    //     droppableIdEnd,
    //     droppableIndexStart,
    //     droppableIndexEnd,
    //     draggableId,} = action.payload;
    //     console.log(droppableIdStart,'')
     
    //   //if in the same list
    //   if(droppableIdStart===droppableIdEnd){
    //     let list = state.columnsFromBackend.find(el => el.id === droppableIdStart);
    //     const card = list.items.splice(droppableIndexStart,1)
    //     list.items.splice(droppableIndexEnd,0,...card)
    //   } 
    //   if(droppableIdStart!==droppableIdEnd){
    //     const sourceColumn = state.columnsFromBackend.find(el => el.id === droppableIdStart);
    //     const destColumn = state.columnsFromBackend.find(el=> el.id === droppableIdEnd);
        
    //     const removed = sourceColumn.items.splice(droppableIndexStart, 1);
    //     destColumn.items.splice(droppableIndexEnd, 0, removed);
    //     // let droppableIdStart = source.droppableId
    //     // console.log(droppableIdStart)
    //     // let droppableIdEnd = destination.droppableId;
    //     // let droppableIndexStart = source.index;
    //     // let droppableIndexEnd = destination.index;
    //   } 
     

    // },

    setLoginByGoogle: (state, action) => {
      state.isLogged = true;
      state.user = action.payload.user;
      localStorage.setItem("jwt-token", action.payload.token);
    },
  },
});

export const { favorite, setLoginByGoogle, test, sort } = trelloSlice.actions;
export default trelloSlice.reducer;