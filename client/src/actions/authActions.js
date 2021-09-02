import axios from 'axios';
import { AUTH } from "../constants/authConstants";

export const signin = (formData, history) => async (dispatch) => {

    try {

        const {data} = await axios.post("http://localhost:5000/user/signin", formData);

        dispatch({type:AUTH, data})

        history.push('/');

    } catch(error) {

        console.log(error);

    }

}

export const signup = (formData, history) => async (dispatch) => {

    try {

        console.log(formData);

        const {data} = await axios.post("http://localhost:5000/user/signup", formData);

        dispatch({type:AUTH, data})

        history.push('/');

    } catch(error) {

        console.log(error);

    }

}