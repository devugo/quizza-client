import { useState, useEffect } from 'react';

import { Input } from '../../../input';
import { FaIcon } from '../../../fa-icon';
import ProfileImg from '../../../../images/default.png';
import LogoText from '../../../../images/logo-text.svg';
import Logo from '../../../../images/logo.svg';
import Hamburger from '../../../../images/hamburger.svg';
import './header.scss';

export const Header = ({
    setOpenSidebar
}) => {
    const [ dropdown, setDropdown ] = useState(false);

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
                    <img src={LogoText} width="100" height="40" /> 
                    <img onClick={()=>setOpenSidebar(prevState => !prevState)} className="hamburger" src={Hamburger} /> 
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
                        <img className="profile-img ml-1" src={ProfileImg} width="30" height="30" />
                        <div className="name">
                            <p className="title">Admin</p>
                            <p className="fullname">Ezenwankwo Ugochukwu</p>
                        </div>

                        <div className={`dropdown ${dropdown ? 'show' : ''}`}>
                            <ul>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Results</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}