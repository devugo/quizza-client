import { FaIcon } from '../../../fa-icon';

import ProfileImg from '../../../../images/default.png';
import './sidebar.scss';
import { Link, useLocation, useHistory, useRouteMatch } from 'react-router-dom';

export const AdminSidebar = ({
    openSidebar,
    auth
}) => {
    const location = useLocation();
    const path = location.pathname;

    return (
        
        <nav className={`dashboard-sidebar${openSidebar ? ' open' : ''}`}>
            <div className="dashboard-sidebar__content">
                <div className={`user-profile center${openSidebar ? ' open' : ''}`}>
                    <img className="circular" src={ProfileImg} width="100" height="100" alt="profile" />
                    <p>{auth.data.name}</p>
                </div>
                <div className="nav">
                    <ul>
                        <li className="nav-link">
                            <Link to="/admin/dashboard" className={`${path === '/admin' || path === '/admin/dashboard' ? 'active' : ''}${openSidebar ? ' open' : ''}`}>
                                <FaIcon text="home" /> 
                                <span className="text">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/admin/users" className={`${path === '/admin/users' ? 'active' : ''}${openSidebar ? ' open' : ''}`}>
                                <FaIcon text="user" /> 
                                <span className="text">Users</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/admin/levels" className={`${path === '/admin/levels' ? 'active' : ''}${openSidebar ? ' open' : ''}`}>
                                <FaIcon text="user" /> 
                                <span className="text">Levels</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/admin/subjects" className={`${path === '/admin/subjects' ? 'active' : ''}${openSidebar ? ' open' : ''}`}>
                                <FaIcon text="user" /> 
                                <span className="text">Subjects</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/admin/questions" className={`${path === '/admin/questions' ? 'active' : ''}${openSidebar ? ' open' : ''}`}>
                                <FaIcon text="user" /> 
                                <span className="text">Questions</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/admin/quizes" className={`${path === '/admin/quizes' ? 'active' : ''}${openSidebar ? ' open' : ''}`}>
                                <FaIcon text="book" /> 
                                <span className="text">Quizes</span>
                            </Link>
                        </li>
                        {/* <li><Link to="/admin/users" className={`${openSidebar ? ' open' : ''}`}><FaIcon text="user" /> <span className="text">Users</span></Link></li> */}
                        {/* <li><a className={`${openSidebar ? ' open' : ''}`} href="#"><FaIcon text="home" /> <span className="text">Levels</span></a></li>
                        <li><a className={`${openSidebar ? ' open' : ''}`} href="#"><FaIcon text="book" /> <span className="text">Quiz</span></a></li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}