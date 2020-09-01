import { useRouter } from 'next/router'
import { Row, Col, Button } from 'reactstrap';
import { BaseLayout, BasePage, PortfolioCard } from '@/components/'
import { useGetUser } from '@/actions/user'
import PortfolioApi from '@/lib/api/portfolios'
import { isAuthorized } from '@/utils/auth0';

const Portfolios = ({ portfolios }) => {
    debugger
    const router = useRouter();
    const { data: userData, loading: userLoading } = useGetUser();

    return (
        <BaseLayout user={userData} loading={userLoading} >
            <BasePage header="Portfolios" className="portfolio-page">
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
                                            >Edit</Button>
                                            <Button color="danger">Delete</Button>
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
        props: { portfolios }
    }
}

export default Portfolios;
