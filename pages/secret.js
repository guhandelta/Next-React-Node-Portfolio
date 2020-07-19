import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'
import { useGetUser } from '@/actions/user'
import { Redirect } from '@/components/shared'
import withAuth from '@/hoc/withAuth'

const Secret = ({ title }) => {
    const { data, loading } = useGetUser();
    if (loading) {
        return <p>Loading...</p>
    }
    //if (!user && typeof window !== 'undefined')  window object is available only in the browser, so this is just to check if the code-
    //-is exe in broser
    if (!data) {
        return <Redirect route="/api/v1/login" />;
    } else {

        return (
            <BaseLayout user={data} loading={loading} >
                <BasePage>
                    <h1>Secret  Page</h1>
                    <h3>{title}</h3>
                </BasePage>
            </BaseLayout>
        )
    }
}


export default withAuth(Secret);
