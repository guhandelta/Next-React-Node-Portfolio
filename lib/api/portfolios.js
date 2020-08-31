import axios from 'axios'

class PortfoliosApi {

    constructor(accessToken) {

        this.config = {}; // Config Object

        if (accessToken) {
            this.config.headers = { //Assigning the accessToken as the value to the authorization key in the config obj's header
                authorization: `Bearer ${accessToken}` //This is how the headers are specified into axios request
            }
        }

        this.apiURL = process.env.PORTFOLIO_API_URL + '/portfolios';
    }

    getAll() {
        return axios.get(this.apiURL);
    }

    getById(id) {
        return axios.get(`${this.apiURL}/${id}`);
    }

    createPortfolio(data) {
        return axios.post(this.apiURL, data, this.config); //Config object to authorize this request
    }

    update(id, data) {
        return axios.patch(`${this.apiURL}/${id}`, data, this.config); //Config object to authorize this request
    }

}

export default PortfoliosApi

