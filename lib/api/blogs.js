import BaseApi from './baseAPI'

class BlogsApi extends BaseApi {

    constructor(accessToken) {
        super(accessToken, 'blogs');
    }

}

export default BlogsApi;

