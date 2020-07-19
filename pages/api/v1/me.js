import auth0 from '@/utils/auth0'


export default async function me(req, res) {
    try {
        // Fetch the user data using the handleProfile() and load the data by making a fetch cal to the endpoint : fetch('/ap/me)-
        //- The entire user info is stored in a cookie, with the Auth0 Session ID
        await auth0.handleProfile(req, res);

    } catch (error) {
        console.log(error);
        res.status(error.status || 400).end(error.message);
    }
}
