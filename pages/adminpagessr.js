import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'
// import { useGetUser } from '@/actions/user'
import { authorizedUser, withAuth } from '@/utils/auth0'

const AdminPageSSR = ({ user, title }) => { //Access to randomData, will be available on Initial Render

    // const { data, loading } = useGetUser(); => Nolonger required as the user info is fetched and supplied from the server
    debugger;
    return (
        <BaseLayout user={user} loading={false} >
            <BasePage>
                <h1>Admin Page</h1>
                <h3>Welcome {user && user.name}</h3>
                <br />
                <h3>{title}</h3>
                {/*<h6>{randomData}</h6> This data is available due to getServerSideProps(), which fetches the data from the server*/}
            </BasePage>
        </BaseLayout>
    )
}

const getTitle = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res({ title: 'My Professional Portfolio' })
        }, 500)
    })
}

// fn() to get req,res and retrn props
export const getServerSideProps = withAuth(async ({ req, res }, user) => {
    const title = await getTitle();
    return title;
})('admin');
// withAuth() will return fn() that takes ({req,res}) and auth the user and provide the user as props to SecretSSR page
// getServerSideProps() will be the main component/fn() that will return props to the pages

export default AdminPageSSR;
