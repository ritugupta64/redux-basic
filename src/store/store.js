import { createStore } from 'redux';

const initialState = {
    count: 1,
}


const reducers = (state=initialState, action) => {
    switch(action.type){
        case 'increment': 
        return state;
    }
    return state;
}

export const store = createStore(reducers);