import AdminRoutes from './admin';
import UserRoutes from './user';
import GeneralRoutes from './general';
import Page404 from '../interfaces/general/pages/404';

const Routes = () => {
    return (
        <>
            <GeneralRoutes />
            <AdminRoutes />
            <UserRoutes />
            {/* <Page404 exact /> */}
        </>
    )
}

export default Routes;