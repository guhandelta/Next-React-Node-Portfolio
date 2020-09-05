import BlogsApi from 'lib/api/blogs'
import auth0 from 'utils/auth0'

export default async function createBlogPost(req, res) {

    try {
        const { accessToken } = await auth0.getSession(req);
        console.log("AccessToken", accessToken);
        //This request takes place from the Node.js env, not from browser env
        const newBlogpost = await new BlogsApi(accessToken).create(req.body);
        return res.json(newBlogpost.data);
    } catch (e) {
        return res.status(e.status || 422).json(e.response.data);
    }
}
