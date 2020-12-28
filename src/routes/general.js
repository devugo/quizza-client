import { Route } from 'react-router-dom';

// General Pages
import Login from '../interfaces/general/pages/login';
import Register from '../interfaces/general/pages/register';
import Home from '../interfaces/general/pages/home';

// Middlewares
import NotAuth from '../middlewares/NotAuth';

const GeneralRoutes = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <NotAuth exact path="/register" component={Register} />
            <NotAuth exact path="/login" component={Login} />
        </>
    )
}

export default GeneralRoutes;