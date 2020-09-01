import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { Row, Col } from 'reactstrap'
import withAuth from '@/hoc/withAuth'
import { BaseLayout, BasePage, PortfolioForm } from '@/components/'
import { useGetPortfolio, useUpdatePortfolio } from '@/actions/portfolios'


const PortfolioEdit = ({ user }) => {
    const router = useRouter();
    const [updatePortfolio, { error }] = useUpdatePortfolio();
    debugger;
    const { data: initialData } = useGetPortfolio(router.query.id); // Providing data as initialData, alias

    // providing the updatePortfolio through a new fn() to provide the the portfolio id and data
    const _updatePortfolio = async (data) => {
        await updatePortfolio(router.query.id, data);
        toast.success('Portfolio has been updated successfully!!', { autoClose: 2500 })
    }

    debugger;
    // router.query.id will be inititally undefined, which will cause an error, but useSWR will try again and get the page after the-
    //- id property is populated || conditional fetching is done here to not to make a fetch request where id param is undefined
    return (
        <BaseLayout user={user} loading={false}>
            <BasePage header="Portfolio Edit">
                <Row>
                    <Col md="8">
                        {initialData &&
                            <PortfolioForm
                                onSubmit={_updatePortfolio}
                                initialData={initialData}
                                btnLabel="Update"
                            />
                        }
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default withAuth(PortfolioEdit)('admin');
