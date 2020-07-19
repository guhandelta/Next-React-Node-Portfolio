import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'
import { useGetUser } from '@/actions/user'
import { Redirect } from '@/components/shared'

const Secret = () => {
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
                </BasePage>
            </BaseLayout>
        )
    }
}
export default Secret;
