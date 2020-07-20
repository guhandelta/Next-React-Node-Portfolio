import { useGetUser } from '@/actions/user'
import { Redirect } from '@/components/shared'


function withAuth(Component) {
    return props => {
        const { data, loading } = useGetUser();
        if (loading) {
            return <p>Loading...</p>
        }

        if (!data) {
            return <Redirect ssr route="/api/v1/login" />;
        } else {
            return <Component user={data} loading={loading} {...props} />
        }
    }
}

// Simples form of above fn()
// const withAuth = Component => props => <Component title="Welcome Authenticated User" {...props} />

export default withAuth
