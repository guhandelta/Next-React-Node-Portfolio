import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'
// import { useGetUser } from '@/actions/user'
import auth0 from '@/utils/auth0'

const SecretSSR = ({ user }) => { //Access to randomData, will be available on Initial Render

    // const { data, loading } = useGetUser(); => Nolonger required as the user info is fetched and supplied from the server
    debugger;
    return (
        <BaseLayout user={user} loading={false} >
            <BasePage>
                <h1>Secret Page</h1>
                <h3>Welcome {user && user.name}</h3>
                {/*<h6>{randomData}</h6> This data is available due to getServerSideProps(), which fetches the data from the server*/}
            </BasePage>
        </BaseLayout>
    )
}

// Getting data from the server and supplying it to the browser
// Creating a special fn() to implement a funcitonality only in the server
// This code will be exe only in the server and not sent to the browser
export const getServerSideProps = async ({ req, res }) => { //Destructurizing the Context Object
    const session = await auth0.getSession(req); // Fetching the Session object
    if (!session || !session.user) {
        // Routing the unauthenticated user to the Login page, from the server-side
        res.writeHead(302, { // HTTPS code 302 => redirect
            Location: '/api/v1/login'
        });
        // Notify the server as this is the end of res
        res.end();
        return {
            // This block of code won't be touched, if the user is authenticated
            props: {} //Return Default props
        };
    }

    return {
        props: { user: session.user }
    }
}

export default SecretSSR;
