import auth0 from 'utils/auth0';
import BlogsApi from 'lib/api/blogs'

export default async function getUserBlogs(req, res) {
    try {
        const { accessToken } = await auth0.getSession(req);
        const json = await new BlogsApi(accessToken).getByUser();
        return res.json(json.data);
    } catch (err) {
        return res.status(err.status || 422).json(err.resonse.data);
    }
}
