import axios from 'axios'

class BaseApi {

    constructor(accessToken, subPath) {

        this.config = {}; // Config Object

        if (accessToken) {
            this.config.headers = { //Assigning the accessToken as the value to the authorization key in the config obj's header
                authorization: `Bearer ${accessToken}` //This is how the headers are specified into axios request
            }
        }

        this.apiURL = process.env.PORTFOLIO_API_URL + `/${subPath}`;
    }

    getAll() {
        return axios.get(this.apiURL);
    }

    update(id, data) {
        return axios.patch(`${this.apiURL}/${id}`, data, this.config); //Config object to authorize this request
    }

    getByUser() {
        return axios.get(`${this.apiURL}/me`, this.config);
    }

    getById(id) {
        return axios.get(`${this.apiURL}/${id}`);
    }

    getBySlug(slug) {
        return axios.get(`${this.apiURL}/s/${slug}`);
    }

    create(data) {
        return axios.post(this.apiURL, data, this.config); //Config object to authorize this request
    }

}

export default BaseApi;

