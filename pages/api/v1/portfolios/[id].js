import PortfoliosApi from '@/lib/api/portfolios'

export default async function handlePortfolio(req, res) {
    const json = await new PortfoliosApi().getById(req.query.id);
    return res.json(json.data);
}
