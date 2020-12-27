//  User Pages
import Dashboard from '../interfaces/admin/pages/dashboard';

//  Middlewares
import IsUser from '../middlewares/IsUser';

const UserRoutes = () => {
    return (
        <>
            {/* User Routes */}
            <IsUser exact path="/user" component={Dashboard} />
            <IsUser exact path="/user/dashboard" component={Dashboard} />
        </>
    )
}

export default UserRoutes;