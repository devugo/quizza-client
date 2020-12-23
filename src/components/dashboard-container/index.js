import { Header } from './components/header';
import { Sidebar } from './components/sidebar';

import './dashboard-container.scss';

const DashboardContainer = ({ children }) => {
    return (
        <div className="dashboard-container">
            <Header />

            <Sidebar />

            { children }
        </div>
    )
}

export default DashboardContainer;