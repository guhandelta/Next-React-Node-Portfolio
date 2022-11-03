import { Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

const gist = (text, maxLength) => {
    if (!text) { return ''; }
    if (text.length <= maxLength) { return text; }

    return text.substr(0, maxLength) + '...';
}

const PortfolioCard = ({ portfolio, children }) =>
    <Card className="portfolio-card">
        <CardHeader className="portfolio-card-header">{portfolio.jobTitle}</CardHeader>
        <CardBody>
            <p className="portfolio-card-city">{portfolio.location}</p>
            <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
            <CardText className="portfolio-card-text">{gist(portfolio.description, 125)}</CardText>
            {children}
        </CardBody>
    </Card>
 

export default PortfolioCard
