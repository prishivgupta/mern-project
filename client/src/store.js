import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducers.js";
import { deletePostReducer, likePostReducer, postCreateReducer, postListReducer, updatePostReducer } from "./reducers/postReducers.js";

const reducer = combineReducers({
    posts: postListReducer,
    createPost: postCreateReducer,
    updatePost: updatePostReducer,
    deletePost: deletePostReducer,
    likePost: likePostReducer,
    auth: authReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;