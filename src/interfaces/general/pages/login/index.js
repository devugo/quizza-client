import { useState, useCallback } from 'react';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';

import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { Message } from '../../../../components/message';
import { FaIcon } from '../../../../components/fa-icon';

import LogoText from '../../../../images/logo-text.svg';

import * as CONSTANTS from '../../../../constants';

import * as AuthActions from '../../../../store/actions/auth';

import './login.scss';

const Login = () => {
    const [ loader, setLoader ] = useState(false);

    const dispatch = useDispatch();
    
    const processLogin = useCallback(async (formData) => {
        
        try {
            await dispatch(AuthActions.login(formData));
            Message('success', 'Login successful', 5);
            setLoader(false);
        }catch (error){
            Message('error', error.response.data.error, 5);
            // console.log(error.response);
            // console.log(error.message);
        }
    }, [loader, setLoader]);

    //  On successfully siginng in with Google
    const onSuccess = useCallback((res) => {
        console.log('[Login Success] currentUser:', res);
        refreshTokenSetup(res);
        verifyGoogle(res.accessToken, res.googleId);
    }, []);

    //  On Failure to login with google
    const onFailure = useCallback((res) => {
        Message('warning', 'There was an error signing in with Google', 5);
    }, []);

    /**
     * Refresh token if expiration time is reached
     * 
     * @param res 
     */
    const refreshTokenSetup = (res) => {
        //  Timing to renew access token
        let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

        const refreshToken = async () => {
            const newAuthRes = await res.reloadAuthResponse();
            refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
            console.log('newAuthRes:', newAuthRes);

            //saveUserToken(newAuthRes.access_token);   <-- Save new token
            console.log(refreshToken, refreshTiming);
        };

        //  Setup first refresh timer
        setTimeout(refreshToken, refreshTiming);
    }

    const verifyGoogle = async (token, id) => {
        try {
            await AuthActions.verifyGoogleAuth(token, id);
            Message('success', 'Login successful', 5);
        }catch (error){
            console.log(error.response);
            Message('warning', 'There wan an error verifying user', 5);
        }
    }

    return (
        <div className="login">
            <div className="quizza-card">
                <div className="logo">
                    <img src={LogoText} alt="logo-text" />
                </div>
                <p className="mt-3 mb-2">Sign in to continue!</p>

                <Formik
                    initialValues={{ email: '', password: '', remember: false }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        if(!values.password){
                            errors.password = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
                        processLogin(values);
                        // setTimeout(() => {
                        //     alert(JSON.stringify(values, null, 2));
                        //     setSubmitting(false);
                        // }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="form-input">
                                <Input
                                    name="email"
                                    placeholder="Email" 
                                    value={values.email}
                                    onChange={handleChange}
                                    classnames={errors.email && touched.email  && 'error'}
                       
                                />
                                <small className="text-danger">{errors.email && touched.email && errors.email}</small>
                            </div>
                            <div className="form-input">
                                <Input
                                    name="password" 
                                    placeholder="Password" 
                                    value={values.password}
                                    onChange={handleChange}
                                    type="password"
                                    classnames={errors.password && touched.password  && 'error'}
                       
                                />
                                <small className="text-danger">{errors.password && touched.password && errors.password}</small>
                            </div>
                            <Button
                                clickAction={()=>{}}
                                text="SIGN IN"
                                classnames="btn-gradient-primary"
                            />
                            <div className="form-input bottom">
                                <label>
                                    {/* <input type="checkbox" /> */}
                                    <Input
                                        name="remember" 
                                        checked={values.remember}
                                        type="checkbox"
                                        onChange={handleChange}
                                        classnames={errors.remember && touched.remember  && 'error'}
                        
                                    /> 
                                    <span className="ml-1">Keep me signed in</span>
                                </label>
                                <a href="#">Forgot password?</a>
                            </div>
                          
                            <GoogleLogin
                                clientId={CONSTANTS.GOOGLE_CLIENT_ID}
                                buttonText="Login"
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={'single_host_origin'}
                                style={{ marginTop: '100px' }}
                                // isSignedIn={true}
                                render={renderProps => (
                                    <Button
                                        clickAction={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        text="SIGN IN WITH GOOGLE"
                                        styles={{background: '#dc3545', borderColor: '#dc3545'}}
                                        icon={<FaIcon text="google" />}
                                    />
                                )}
                            />
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login;