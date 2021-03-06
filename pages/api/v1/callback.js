import auth0 from '@/utils/auth0'


export default async function login(req, res) {
    try {
        await auth0.handleCallback(req, res, { redirectTo: '/' }); //redirectTo => Optional Paramater
    } catch (error) {
        console.log(error);
        res.status(error.status || 400).end(error.message);
    }
}
