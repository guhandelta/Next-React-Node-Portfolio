import axios from 'axios'

class BlogsApi {

    constructor(accessToken) {

        this.config = {}; // Config Object

        if (accessToken) {
            this.config.headers = { //Assigning the accessToken as the value to the authorization key in the config obj's header
                authorization: `Bearer ${accessToken}` //This is how the headers are specified into axios request
            }
        }

        this.apiURL = process.env.PORTFOLIO_API_URL + '/blogs';
    }


    create(data) {
        return axios.post(this.apiURL, data, this.config); //Config object to authorize this request
    }


}

export default BlogsApi;

