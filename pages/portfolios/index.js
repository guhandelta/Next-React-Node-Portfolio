import { useState } from 'react'
import { useRouter } from 'next/router'
import { Row, Col, Button } from 'reactstrap';
import { BaseLayout, BasePage, PortfolioCard } from 'components'
import { useGetUser } from 'actions/user'
import { useDeletePortfolio } from 'actions/portfolios'
import PortfolioApi from 'lib/api/portfolios'
import { isAuthorized } from 'utils/auth0';

const Portfolios = ({ portfolios: inititalPortfolioData }) => {
    // debugger
    const router = useRouter();
    const [portfolios, setPortfolios] = useState(inititalPortfolioData);
    const [deletePortfolio, { data, error }] = useDeletePortfolio();
    const { data: userData, loading: userLoading } = useGetUser();

    const _deletePortfolio = async (e, portfolioId) => {
        e.stopPropagation();
        const confirmDeletion = confirm("Are you sure you want to delete this experience?");
        if (confirmDeletion) {
            await deletePortfolio(portfolioId);
            setPortfolios(portfolios.filter(portfolio => portfolio._id !== portfolioId))
        }
        // const newPortfolio = portfolios.filter(portfolio => portfolio._id !== portfolioId);
    }

    return (
        <BaseLayout user={userData} loading={userLoading} >
            <BasePage
                header="Portfolios"
                className="portfolio-page"
                title="Portfolio - Guhaprasaanth"
                metaDescription="My work experience"
            >
                <Row>
                    {
                        portfolios.map(portfolio =>
                            <Col
                                md="4"
                                onClick={() => {
                                    router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)
                                }}
                                key={portfolio._id}
                            >
                                <PortfolioCard
                                    portfolio={portfolio}
                                >
                                    {userData && isAuthorized(userData, 'admin') &&
                                        <>
                                            <Button
                                                onClick={(e) => { // e -> Event object would be available, when an event handler is provided to the onClick()
                                                    e.stopPropagation(); // To prevent Event Bubbling and have the event delivered to this element, and not to the parent element(PortfolioCard)
                                                    router.push('/portfolios/[id]/edit', `/portfolios/${portfolio._id}/edit`)
                                                }}
                                                className="mr-2"
                                                color="warning"
                                            >
                                                Edit
                                            </Button>

                                            <Button
                                                color="danger"
                                                onClick={(e) => _deletePortfolio(e, portfolio._id)}
                                            >
                                                Delete
                                            </Button>
                                        </>
                                    }
                                </PortfolioCard>
                            </Col>
                        )

                    }
                </Row>
            </BasePage>
        </BaseLayout >
    )
}

// This fn() will be called during the build time - This fn() helps boost performace by building static pages with dynamic data
export async function getStaticProps() {
    const json = await new PortfolioApi().getAll();
    const portfolios = json.data; //Will get the portfolios for this page, as props
    return {
        props: { portfolios },
        unstable_revalidate: 1 // NextJS will attempt to re-generate the page when a request comes in at most, once every second
    }
}

export default Portfolios;
