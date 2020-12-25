import { useState } from 'react';

import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Content } from './components/content';

import './dashboard-container.scss';

const DashboardContainer = ({ children }) => {
    const [ openSidebar, setOpenSidebar ] = useState(true);

    return (
        <div className="dashboard-container">
            <Header
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
            />

            <div className="dashboard-main">
                <Sidebar
                    openSidebar={openSidebar}
                />
                <Content
                    openSidebar={openSidebar}
                >
                    { children }
                </Content>
            </div>
        </div>
    )
}

export default DashboardContainer;