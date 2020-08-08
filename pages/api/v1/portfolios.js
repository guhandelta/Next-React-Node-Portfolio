import PortfoliosApi from '../../../lib/api/portfolios'

export default async function createPortfolio(req, res) {

    try {
        const data = req.body;
        await new PortfoliosApi.createPortfolio(data);
        return res.json({ message: 'Porfolio created successfully....' });
    } catch (e) {
        console.log('Api Error!!......');
        return res.status(e.status || 400).end(e.message);
    }
}
