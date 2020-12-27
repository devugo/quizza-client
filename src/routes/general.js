import { Route } from 'react-router-dom';

// General Pages
import Login from '../interfaces/general/pages/login';
import Home from '../interfaces/general/pages/home';

// Middlewares
import NotAuth from '../middlewares/NotAuth';

const GeneralRoutes = () => {
    return (
        <>
            <NotAuth exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
        </>
    )
}

export default GeneralRoutes;