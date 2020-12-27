import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Header } from './components/header';
import { AdminSidebar } from './components/sidebar/admin';
import { UserSidebar } from './components/sidebar/user';
import { Content } from './components/content';

import './dashboard-container.scss';

const DashboardContainer = ({ children }) => {
    const auth = useSelector(state => state.auth);
    const [ openSidebar, setOpenSidebar ] = useState(true);

    return (
        <div className="dashboard-container">
            <Header
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
                auth={auth}
            />

            <div className="dashboard-main">
                {
                    auth.data.role === 1 ?
                    <AdminSidebar
                        openSidebar={openSidebar}
                        auth={auth}
                    /> :
                    <UserSidebar
                        openSidebar={openSidebar}
                        auth={auth}
                    />
                }
               
                <Content
                    openSidebar={openSidebar}
                    auth={auth}
                >
                    { children }
                </Content>
            </div>
        </div>
    )
}

export default DashboardContainer;