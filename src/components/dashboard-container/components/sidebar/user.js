import { FaIcon } from '../../../fa-icon';

import ProfileImg from '../../../../images/default.png';
import './sidebar.scss';

export const UserSidebar = ({
    openSidebar,
    setOpenSidebar
}) => {
    return (
        <nav className={`dashboard-sidebar${openSidebar ? ' open' : ''}`}>
            <div className="dashboard-sidebar__content">
                <div className={`user-profile center${openSidebar ? ' open' : ''}`}>
                    <img className="circular" src={ProfileImg} width="100" height="100" alt="profile" />
                    <p>Ezenwankwo Ugochukwu</p>
                </div>
                <div className="nav">
                    <ul>
                        <li className="active"><a className={`active${openSidebar ? ' open' : ''}`} href="#"><FaIcon text="home" /> <span className="text">Dashboard</span></a></li>
                        <li><a className={`${openSidebar ? ' open' : ''}`} href="#"><FaIcon text="user" /> <span className="text">Users</span></a></li>
                        <li><a className={`${openSidebar ? ' open' : ''}`} href="#"><FaIcon text="home" /> <span className="text">Levels</span></a></li>
                        <li><a className={`${openSidebar ? ' open' : ''}`} href="#"><FaIcon text="book" /> <span className="text">Quiz</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}