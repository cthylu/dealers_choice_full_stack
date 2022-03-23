import {applyMiddleware, createStore} from 'redux';
import axios from 'axios';
import loggerMiddleware from 'redux-logger';
import thunk from 'redux-thunk';

const LOAD_TREES = "LOAD_TREES";
const ADD_TREE = "ADD_TREE";

// Actions
export const _loadTrees = (trees) => {
    return {
        type: LOAD_TREES,
        trees
    }
}
export const addTree = (tree) => {
    return {
        type: ADD_TREE,
        tree: {
            name: "New Tree!",
            species: "Unknown"
        }
        //tree
    }
}

// Thunk action creators
export const loadTrees = () => {
    return async (dispatch) => {
        const trees = (await axios.get('/api/trees')).data;
        dispatch(_loadTrees(trees));
    }
}
/* export const addTree = (tree) => {
    return async (dispatch) => {
        const newTree = (await axios.post('/api/trees'), tree).data;
        dispatch(_addTree(newTree));
    }
} */

const initialState = { trees: [] };

const reducer = (currentState = initialState, action) => {
    //console.log("ACTION: ", action);
    switch (action.type) {
        case LOAD_TREES:
            return {...currentState, trees: action.trees};
        case ADD_TREE:
            return {...currentState, trees: [...currentState.trees, action.tree]};
        default:
            return currentState;
    }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware, thunk));

export default store