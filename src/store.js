import {createStore} from "redux"

const initialState = {
    data: [],
};

function reducer(state = initialState, action){
    
    switch(action.type) {
        case 'create':
        case 'read':
        case 'update':
        case 'delete':
          return {
            ...state,
            [action.type]: action.value
          }
        case 'create':
          return {
            ...state,
            data: [...state.data, action.payload]
          }
        case 'read':
          return {
            //pass data to payload
            ...state,
            data: action.payload,
          }
        case 'update': 
        
        const updatedData = state.data.map(post => {
            if(post.id === action.payload.updatedData){
                return action.payload;
            }
            else
            {
                return post;
            }
        })
        
        return {
            ...state,
            data: updatedData
          }
        case 'delete':
            // when firing the action, need to send id from post here
          const filteredData = data.filter(post => action.id !== post.id);
          return {
            ...state,
            data: filteredData,
          } 
      };

    return state;
}

export const Store = createStore(reducer);

//to tell our project about store, 
//add the following to some file in the project

// import { Provider } from "react-redux";
// import {store} from "./store"