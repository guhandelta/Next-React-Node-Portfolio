import React from 'react'
import PortfoliosApi from 'lib/api/portfolios'
import auth0 from 'utils/auth0'

export default async function createPortfolio(req, res) {

    try {
        const { accessToken } = await auth0.getSession(req);
        // console.log("AccessToken", accessToken);
        //This request takes place from the Node.js env, not from browser env
        const newPortfolio = await new PortfoliosApi(accessToken).create(req.body);
        return res.json(newPortfolio.data);
    } catch (e) {
        console.log('Api Error!!......');
        return res.status(e.status || 422).json(e.response.data);
    }
}
