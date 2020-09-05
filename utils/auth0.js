import { initAuth0 } from '@auth0/nextjs-auth0';

const auth0 = initAuth0({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'openid profile',
    audience: process.env.AUTH0_AUDIENCE,
    redirectUri: process.env.AUTH0_REDIRECT_URI,
    postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
    session: {
        // The secret used to encrypt the cookie.
        cookieSecret: process.env.AUTH0_COOKIE_SECRET,
        storeAccessToken: true // To get the access token from the session
    }
});

export default auth0;

export const isAuthorized = (user, role) => {
    return (user && user[process.env.AUTH0_NAMESPACE + '/roles'].includes(role));
}

export const authorizedUser = async (req, res) => { // Will redirect or return a user if a user is logged in

    const session = await auth0.getSession(req); // Fetching the Session object
    if (!session || !session.user) {
        // Routing the unauthenticated user to the Login page, from the server-side
        res.writeHead(302, { // HTTPS code 302 => redirect
            Location: '/api/v1/login'
            // Location: '/notAuthenticated'
        });
        // Notify the server as this is the end of res
        res.end();
        return null; // Where there is no user logged in
    }

    return session.user;
}

export const withAuth = getData => role => async ({ req, res }) => {
    const session = await auth0.getSession(req); // Fetching the Session object
    if (!session || !session.user || (role && !isAuthorized(session.user, role))) {
        // Routing the unauthenticated user to the Login page, from the server-side
        res.writeHead(302, { // HTTPS code 302 => redirect
            // Location: '/notAuthenticated'
            Location: '/api/v1/login'
        });
        // Notify the server as this is the end of res
        res.end();
        return { props: {} };
    }

    const data = getData ? await getData({ req, res }, session.user) : {};

    return { props: { user: session.user, ...data } };

}
