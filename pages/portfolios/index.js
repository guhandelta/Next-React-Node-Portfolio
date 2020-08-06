import Link from 'next/link'
import { Row, Col } from 'reactstrap';
import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'
import { useGetUser } from '@/actions/user'
import PortfolioApi from '@/lib/api/portfolios'
import PortfolioCard from '@/components/portfoliocard'

const Portfolios = ({ portfolios }) => {
    debugger
    const { data: userData, loading: userLoading } = useGetUser();

    return (
        <BaseLayout user={userData} loading={userLoading} >
            <BasePage className="portfolio-page">
                <Row>
                    {
                        portfolios.map(portfolio =>
                            <Col md="4" key={portfolio._id}>
                                <PortfolioCard portfolio={portfolio} />
                            </Col>
                        )

                    }
                </Row>
            </BasePage>
        </BaseLayout>
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
