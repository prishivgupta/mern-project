import { Container, Avatar, Button, Paper, Grid, Typography} from '@material-ui/core';
import React, { useState } from 'react';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {GoogleLogin} from 'react-google-login';
import Icon from './icon';
import useStyles from "./styles";
import Input from './input';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Auth = () => {

    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false)

    const dispatch = useDispatch();

    const history = useHistory();

    const submitHandler = () => {

    }

    const changeHandler = () => {

    }

    const showPasswordHandler = () => {

        setShowPassword((prev) => !prev)

    }

    const switchMode = () => {

        setIsSignup((prev) => !prev)
        showPasswordHandler(false)

    }

    const googleSuccess = async (res) => {
 
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {

            dispatch({type: 'AUTH', data: {result, token}});

            history.push('/');

        } catch(error) {
            console.log(error)
        }

    }

    const googleError = (error) => {
        console.log(error);
    }

    return (

        <Container component="main" maxWidth="xs">

            <Paper className={classes.paper} elevation={3}>

                <Avatar className={classes.avatar}>

                    <LockOutlinedIcon />

                </Avatar>

                <Typography variant="h5"> {isSignup ? 'Sign Up' : 'Sign In'} </Typography>

                <form className={classes.form} onSubmit={submitHandler}>

                    <Grid container spacing={2}>

                        {
                            isSignup && (

                                <>
                                    <Input name="firstName" label="First Name" changeHandler={changeHandler} autoFocus half></Input>
                                    <Input name="lastName" label="Last Name" changeHandler={changeHandler} autoFocus half></Input> 
                                </>

                            )
                        }

                        <Input name="email" label="Email Address" changeHandler={changeHandler} type="email" />
                        <Input name="password" label="Password" changeHandler={changeHandler} type={showPassword ? 'text' : 'password'} showPasswordHandler={showPasswordHandler} />
                        { isSignup && <Input name="confirmPassword" label="Confirm Password" changeHandler={changeHandler} type="password" /> }

                    </Grid>

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>

                    <GoogleLogin
                        clientId="634293095499-0400m6kdik0u6ecubkfaectki8sukdfu.apps.googleusercontent.com"
                        render={(renderProps) => (
                        <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                            Google Sign In
                        </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />

                    <Grid container justify="flex-end">

                        <Grid item>

                            <Button onClick={switchMode}>
                            { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                            </Button>

                        </Grid>

                    </Grid>

                </form>

            </Paper>

        </Container>

    )

}

export default Auth
