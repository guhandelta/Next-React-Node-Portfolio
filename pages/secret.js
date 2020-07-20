import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'
import withAuth from '@/hoc/withAuth'

const Secret = ({ user, loading }) => {

    debugger;

    return (
        <BaseLayout user={user} loading={loading} >
            <BasePage>
                <h1>Secret Page</h1>
                <h3>Welcome {user.name}</h3>
            </BasePage>
        </BaseLayout>
    )
}


export default withAuth(Secret);
