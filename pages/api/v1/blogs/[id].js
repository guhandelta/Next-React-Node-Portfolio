import BlogsApi from 'lib/api/blogs'
// import auth0 from '/utils/auth0';

export default async function handleBlog(req, res) {
    console.log(req.method);
    if (req.method === 'GET') {
        const json = await new BlogsApi().getById(req.query.id);
        return res.json(json.data);
    }

    // if (req.method === 'PATCH') {
    //     try {
    //         const { accessToken } = await auth0.getSession(req);
    //         const json = await new PortfoliosApi(accessToken).update(req.query.id, req.body);
    //         return res.json(json.data);
    //     } catch (e) {
    //         console.log('Api Error!!......');
    //         return res.status(e.status || 422).json(e.response.data);
    //     }
    // }

    // if (req.method === 'DELETE') {
    //     const { accessToken } = await auth0.getSession(req);
    //     const json = await new PortfoliosApi(accessToken).delete(req.query.id, req.body);
    //     return res.json(json.data);
    // }
}


