import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import { useGetUser } from '@/actions/user'

const NotAuthorized = () => {
    const { data, loading } = useGetUser()

    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage>
                <h1>This is the admin Page</h1>
                <h2>You don't have permission to access the page</h2>
            </BasePage>
        </BaseLayout>
    )
}

export default NotAuthorized;
