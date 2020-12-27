//  Admin Pages
import Dashboard from '../interfaces/admin/pages/dashboard';
import Levels from '../interfaces/admin/pages/levels';
import Quizes from '../interfaces/admin/pages/quizes';
import Users from '../interfaces/admin/pages/users';
import Subjects from '../interfaces/admin/pages/subjects';

// Middlewares
import IsAdmin from '../middlewares/IsAdmin';

const AdminRoutes = () => {
    return (
        <>
            <IsAdmin exact path="/admin" component={Dashboard} />
            <IsAdmin exact path="/admin/dashboard" component={Dashboard} />
            <IsAdmin exact path="/admin/levels" component={Levels} />
            <IsAdmin exact path="/admin/quizes" component={Quizes} />
            <IsAdmin exact path="/admin/users" component={Users} />
            <IsAdmin exact path="/admin/subjects" component={Subjects} />
        </>
    )
}

export default AdminRoutes;