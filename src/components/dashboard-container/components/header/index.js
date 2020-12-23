import { Input } from '../../../input';
import { FaIcon } from '../../../fa-icon';
import ProfileImg from '../../../../images/default.png';
import './header.scss';

export const Header = () => {
    return (
        <nav className="dashboard-header">
            <div className="dashboard-header__content">
                <div className="left logo">
                    QUIZZA
                </div>

                <div className="right">
                    <Input
                        name="search" 
                        placeholder="Searc for anuthing..."
                    />
                    <div className="profile">
                        <img src={ProfileImg} width="30" height="30" />
                        <div className="name">
                            <p>Student</p>
                            <p>Ezenwankwo Ugochukwu</p>
                        </div>
                    </div>
                    <FaIcon
                        text="user"
                    />
                </div>
            </div>
        </nav>
    )
}