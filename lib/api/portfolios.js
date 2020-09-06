import axios from 'axios'
import BaseApi from './baseAPI'

class PortfoliosApi extends BaseApi {

    constructor(accessToken) {

        super(accessToken, 'portfolios');
        // this.apiURL = process.env.PORTFOLIO_API_URL + '/portfolios';
    }

    delete(id) {
        return axios.delete(`${this.apiURL}/${id}`, this.config); //Config object to authorize this request
    }

}

export default PortfoliosApi

