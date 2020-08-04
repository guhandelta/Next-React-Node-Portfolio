import { useGetUser } from '@/actions/user';
import { Redirect } from '@/components/shared';
import { isAuthorized } from '@/utils/auth0';


const withAuth = Component => role => {
    return props => {
        const { data, loading } = useGetUser();
        if (loading) {
            return <p>Loading...</p>
        }

        if (!data) {
            // return <Redirect ssr route="/notAuthenticated" />;
            return <Redirect ssr route="/api/v1/login" />;
        } else {
            if (role && !isAuthorized(data, role)) {
                return <Redirect ssr route="/notAuthorized" />;
                // return <Redirect ssr route="/api/v1/login" />;
            }
            return <Component user={data} loading={loading} {...props} />
        }
    }
}

// Simples form of above fn()
// const withAuth = Component => props => <Component title="Welcome Authenticated User" {...props} />

export default withAuth
