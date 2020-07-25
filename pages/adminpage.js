import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'
import withAuth from '@/hoc/withAuth'

const AdminPage = ({ user, loading }) => {

    debugger;

    return (
        <BaseLayout user={user} loading={loading} >
            <BasePage>
                <h1>Admin Page</h1>
                <h3>Welcome {user.name}</h3>
            </BasePage>
        </BaseLayout>
    )
}


export default withAuth(AdminPage)('admin'); // withAuth returns a funcition, which returns another function, called with the admin role
// export default withAuth(AdminPage, 'Admin'); can also pass in the role like this
