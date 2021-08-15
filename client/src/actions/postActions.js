import axios from 'axios';
import {POST_LIST_REQUEST,POST_LIST_SUCCESS,POST_LIST_FAIL,POST_CREATE_REQUEST,POST_CREATE_SUCCESS,POST_CREATE_FAIL, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAIL, DELETE_POST_REQUEST, DELETE_POST_FAIL, DELETE_POST_SUCCESS, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAIL} from "../constants/postConstsants";

export const listPosts = () => async (dispatch) => {

    dispatch({type:POST_LIST_REQUEST})

    try {

        const {data} = await axios.get("http://localhost:5000/posts");

        dispatch({type:POST_LIST_SUCCESS, payload: data})

    } catch(error) {

        dispatch({type:POST_LIST_FAIL, payload: error.message})

    }

}

export const createPost = (post) => async (dispatch) => {

    dispatch({type:POST_CREATE_REQUEST})

    try {

        const {data} = await axios.put("http://localhost:5000/posts", post)

        dispatch({type:POST_CREATE_SUCCESS, payload: data})

    } catch (error) {

        dispatch({type:POST_CREATE_FAIL, payload: error.message})

    }
}

export const updatePost = (id,post) =>  async (dispatch) => {

    dispatch({type:UPDATE_POST_REQUEST})

    try {
        
        const {data} = await axios.patch(`http://localhost:5000/posts/${id}`,post)

        dispatch({type:UPDATE_POST_SUCCESS, payload: data})

    } catch (error) {

        dispatch({type:UPDATE_POST_FAIL,payload: error.message})

    }

}

export const deletePost = (id) => async (dispatch) => {

    dispatch({type: DELETE_POST_REQUEST});

    try {

        await axios.delete(`http://localhost:5000/posts/${id}`);

        dispatch({type:DELETE_POST_SUCCESS,payload: id})

    } catch (error) {

        dispatch({type:DELETE_POST_FAIL,payload: error.message});

    }

}

export const likePost = (id) =>  async (dispatch) => {

    dispatch({type:LIKE_POST_REQUEST});

    try {
        
        const {data} = await axios.patch(`http://localhost:5000/posts/${id}/likePost`);

        dispatch({type:LIKE_POST_SUCCESS, payload: data})

    } catch (error) {

        dispatch({type:LIKE_POST_FAIL,payload: error.message})
    }

}