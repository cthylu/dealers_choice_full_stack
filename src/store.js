import {createStore} from 'redux'
import axios from 'axios'

const LOAD_TREES = "LOAD_TREES";
const ADD_TREE = "ADD_TREE";

export const loadTrees = (trees) => {
    return {
        type: LOAD_TREES,
        trees: trees
    }
}
/* export const loadTrees = () => {
    return async(dispatch) => {
        const trees = await axios.get('/api/trees').data;
        dispatch({
            type: LOAD_MOVIES,
            movies
          });
    }
} */

export const addTree = () => {
    return {
        type: ADD_TREE,
        tree: {
            name: "New Tree!",
            species: "Unknown"
        }
    }
}

const initialState = { trees: [] };

const reducer = (currentState = initialState, action) => {
    console.log("ACTION: ", action);
    switch (action.type) {
        case LOAD_TREES:
            return {...currentState, trees: action.trees};
        case ADD_TREE:
            return {...currentState, trees: [...currentState.trees, action.tree]};
        default:
            return currentState;
    }
}

const store = createStore(reducer);

export default store