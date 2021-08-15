
import { DELETE_POST_FAIL, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, LIKE_POST_FAIL, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, UPDATE_POST_FAIL, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS } from "../constants/postConstsants";

export const postListReducer = (state=[],action) => {

    switch (action.type) {

        case 'POST_LIST_REQUEST':
            return state;

        case 'POST_LIST_SUCCESS':
            return action.payload;

        case 'POST_LIST_FAIL':
            return action.payload;

        default:
            return state;

    }

}

export const postCreateReducer = (state=[],action) => {

    switch (action.type) {

        case 'POST_CREATE_REQUEST':
            return state;

        case 'POST_CREATE_SUCCESS':
            return [...state, action.payload];

        case 'POST_CREATE_FAIL':
            return action.payload;

        default:
            return state;

    }

}

export const updatePostReducer = (state=[], action) => {

    switch (action.type) {

        case UPDATE_POST_REQUEST:
            return state;
        
        case UPDATE_POST_SUCCESS:
            return state.map((p) => p._id === action.payload ? action.payload : null);

        case UPDATE_POST_FAIL:
            return action.payload;
    
        default:
            return state;

    }

}

export const deletePostReducer = (state=[], action) => {

    switch (action.type) {

        case DELETE_POST_REQUEST:
            return state;
        
        case DELETE_POST_SUCCESS:
            return state.filter((post) => post._id !== action.payload);

        case DELETE_POST_FAIL:
            return action.payload;
    
        default:
            return state;

    }

}

export const likePostReducer = (state=[], action) => {

    switch (action.type) {

        case LIKE_POST_REQUEST:
            return state;
        
        case LIKE_POST_SUCCESS:
            return state.map((p) => p._id === action.payload ? action.payload : null);

        case LIKE_POST_FAIL:
            return action.payload;
    
        default:
            return state;

    }

}