import axios from 'axios'

class PortfoliosApi {

    constructor() {
        this.apiURL = process.env.PORTFOLIO_API_URL + '/portfolios';
    }

    getAll() {
        return axios.get(this.apiURL);
    }

    getById(id) {
        return axios.get(`${this.apiURL}/${id}`);
    }

    createPortfolio(data) {
        return axios.post(this.apiURL, data);
    }

}

export default PortfoliosApi

