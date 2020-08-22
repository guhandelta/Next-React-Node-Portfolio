import PortfoliosApi from '@/lib/api/portfolios'
import auth0 from '@/utils/auth0'

export default async function createPortfolio(req, res) {

    try {
        const { accessToken } = await auth0.getSession(req);
        //This request takes place from the Node.js env, not from browser env
        const newPortfolio = await new PortfoliosApi(accessToken).createPortfolio(req.body);
        return res.json(newPortfolio.data);
    } catch (e) {
        console.log('Api Error!!......');
        return res.status(e.status || 400).end(e.message);
    }
}
