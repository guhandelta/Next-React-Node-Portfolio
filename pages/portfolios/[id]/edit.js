import { BaseLayout, BasePage, PortfolioForm } from '@/components/'
import { Row, Col } from 'reactstrap'
import { useRouter } from 'next/router'
import withAuth from '@/hoc/withAuth'
import { useGetPortfolio } from '@/actions/portfolios'


const PortfolioEdit = ({ user }) => {
    const router = useRouter();
    const { data } = useGetPortfolio(router.query.id);
    debugger;
    // router.query.id will be inititally undefined, which will cause an error, but useSWR will try again and get the page after the-
    //- id property is populated || conditional fetching is done here to not to make a fetch request where id param is undefined
    return (
        <BaseLayout user={user} loading={false}>
            <BasePage header="Portfolio Edit">
                <Row>
                    <Col md="8">
                        {data &&
                            <PortfolioForm
                                onSubmit={(data => alert(JSON.stringify(data)))}
                                initialData={data}
                            />
                        }
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default withAuth(PortfolioEdit)('admin');
