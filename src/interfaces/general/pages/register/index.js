import { useState, useCallback } from 'react';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';

import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { Message } from '../../../../components/message';
import { FaIcon } from '../../../../components/fa-icon';

import LogoText from '../../../../images/logo-text.svg';

import * as CONSTANTS from '../../../../constants';

import * as AuthActions from '../../../../store/actions/auth';

import './register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [ loader, setLoader ] = useState(false);
    
    const processRegister = useCallback(async (formData) => {
        
        try {
            await dispatch(AuthActions.register(formData));
            Message('success', 'Registration successful', 5);
            // setLoader(false);
        }catch (error){
            // console.log(error.response.data);
            let callError = CONSTANTS.ERRORDESC;

            let errors = (JSON.parse(error.response.data));

            if(errors){
                let errorOne = errors[Object.keys(errors)[0]];

                if(errorOne && errorOne[0]){
                    callError = errorOne[0];
                }
            }
            Message('error', callError, 5);
            setLoader(false);
        }
    }, [loader, setLoader]);

    if(auth && auth.loggedIn){
        if(auth.data.role === 1){
            return <Redirect to='/admin' />
        }else if(auth.data.role === 2){
            return <Redirect to='/user' />
        }
    }

    return (
        <div className="register">
            <div className="quizza-card">
                <div className="logo">
                    <img src={LogoText} alt="logo-text" />
                </div>
                <p className="mt-3 mb-2"><strong>New here? Signup to proceed!</strong></p>

                <Formik
                    initialValues={{ email: '', password: '', name: '', username: '', password_confirmation: '', agree: false }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Email is required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Please, specify a valid email address';
                        }
                        if(!values.password){
                            errors.password = 'Password is required';
                        }
                        if(!values.name){
                            errors.name = 'Name is required';
                        }
                        if(!values.username){
                            errors.username = 'Username is required';
                        }
                        if(!values.password_confirmation){
                            errors.password_confirmation = 'Please, confirm your password';
                        }else if(values.password_confirmation !== values.password){
                            errors.password_confirmation = 'Confirm Password must match password';
                        }
                        if(!values.agree){
                            errors.agree = 'Please, Agree to terms and conditions';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setLoader(true);
                        
                        processRegister(values);
                      
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
                                    name="name"
                                    placeholder="Name" 
                                    value={values.name}
                                    onChange={handleChange}
                                    classnames={errors.name && touched.name  && 'error'}
                       
                                />
                                <small className="text-danger">{errors.name && touched.name && errors.name}</small>
                            </div>
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
                                    name="username"
                                    placeholder="Username" 
                                    value={values.username}
                                    onChange={handleChange}
                                    classnames={errors.username && touched.username  && 'error'}
                       
                                />
                                <small className="text-danger">{errors.username && touched.username && errors.username}</small>
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
                            <div className="form-input">
                                <Input
                                    name="password_confirmation" 
                                    placeholder="Confirm Password" 
                                    value={values.password_confirmation}
                                    onChange={handleChange}
                                    type="password"
                                    classnames={errors.password_confirmation && touched.password_confirmation  && 'error'}
                       
                                />
                                <small className="text-danger">{errors.password_confirmation && touched.password_confirmation && errors.password_confirmation}</small>
                            </div>
                            <div className="form-input bottom">
                                <label>
                                    <Input
                                        name="agree" 
                                        checked={values.agree}
                                        type="checkbox"
                                        onChange={handleChange}
                                        classnames={errors.agree && touched.agree  && 'error'}
                                        classnames={errors.agree && touched.agree  && 'error'}
                                    /> 
                                    <span className="ml-1">I agree to all the Terms and Conditions</span>
                                </label>
                                <small className="text-danger">{errors.agree && touched.agree && errors.agree}</small>
                            </div>
                            <Button
                                text="REGISTER"
                                classnames="btn-gradient-primary"
                                spin={loader}
                                disabled={loader}
                            />
                            <div className="center mt-2">
                                <span>Already have an account? <Link to="/login">Sign in</Link></span>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Register;