import PortfoliosApi from '@/lib/api/portfolios'
import auth0 from '@/utils/auth0'

export default async function createPortfolio(req, res) {

    try {
        const { accessToken } = await auth0.getSession(req);
        console.log(accessToken);
        await new PortfoliosApi().createPortfolio(req.body);
        // await new PortfoliosApi(accessToken).createPortfolio(req.body);
        return res.json({ message: 'Porfolio created successfully....' });
    } catch (e) {
        console.log('Api Error!!......');
        return res.status(e.status || 400).end(e.message);
    }
}
