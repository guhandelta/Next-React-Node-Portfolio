import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage'
import { useGetUser } from '@/actions/user'

const NotAuthenticated = () => {
    const { data, loading } = useGetUser()

    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage>
                <h1>This is a Protected Page</h1>
                <h2>Please loginto access the page</h2>
            </BasePage>
        </BaseLayout>
    )
}

export default NotAuthenticated
