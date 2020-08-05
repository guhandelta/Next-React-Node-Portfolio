import Link from 'next/link'
import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'
import { useGetUser } from '@/actions/user'
import PortfolioApi from '@/lib/api/portfolios'

const Portfolios = ({ portfolios }) => {
    const { data: userData, loading: userLoading } = useGetUser();
    const renderPortfolios = (portfolios) => {
        return portfolios.map(portfolio =>
            <li key={portfolio._id} style={{ 'fontSize': '20px' }}>
                <Link as={`/portfolios/${portfolio._id}`} href="/portfolios/[id]">
                    <a>
                        {portfolio.title}
                    </a>
                </Link>
            </li>
        )
    }

    return (
        <BaseLayout user={userData} loading={userLoading} >
            <BasePage>
                <ul>
                    {renderPortfolios(portfolios)}
                </ul>
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
