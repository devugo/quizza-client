import { useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';

import { Input } from '../../../input';
import { FaIcon } from '../../../fa-icon';
import ProfileImg from '../../../../images/default.png';
import LogoText from '../../../../images/logo-text.svg';
import Logo from '../../../../images/logo.svg';
import Hamburger from '../../../../images/hamburger.svg';

import * as AuthActions from '../../../../store/actions/auth';
import { Message } from '../../../../components/message'

import './header.scss';

export const Header = ({
    setOpenSidebar,
    auth
}) => {
    const dispatch = useDispatch();

    const [ dropdown, setDropdown ] = useState(false);

    const logout = useCallback(async () => {
        try {
            await dispatch(AuthActions.logout());
            Message('success', 'Logout successful', 5);
            
        }catch (error){
            Message('error', 'There was an error signing out', 5);
        }
    }, []);

    useEffect(() => {
        window.onclick = function(event) {
            // console.log(event.target);
            if (!event.target.matches(['.profile', '.profile-img', '.name', '.dropdown', '.title', '.fullname', '.fa'])) {
                setDropdown(false);
            }
        }
    })
    return (
        <nav className="dashboard-header">
            <div className="dashboard-header__content">
                <div className="left logo">
                    <img src={LogoText} width="100" height="40" alt="logo-text" /> 
                    <img onClick={()=>setOpenSidebar(prevState => !prevState)} className="hamburger" alt="hamburger" src={Hamburger} /> 
                </div>

                <div className="right">
                    <div className="input-control">
                        <Input
                            name="search" 
                            placeholder="Search for anything..."
                        />
                        <FaIcon
                            text="search"
                            color="grey"
                        />
                    </div>
                    <div className="profile" onClick={()=>setDropdown(!dropdown)}>
                        <FaIcon
                            text="caret-down"
                        />
                        <img className="profile-img ml-1" src={ProfileImg} width="30" height="30" alt="profile" />
                        <div className="name">
                            <p className="title">{ auth.data.role === 1 ? 'Admin' : 'User'}</p>
                            <p className="fullname">{ auth.data.name }</p>
                        </div>

                        <div className={`dropdown ${dropdown ? 'show' : ''}`}>
                            <ul>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Results</a></li>
                                <li><a href="" onClick={logout}>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}