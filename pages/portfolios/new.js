
import { Row, Col } from 'reactstrap'

import { BaseLayout, BasePage, PortfolioForm } from '@/components/'
import withAuth from '@/hoc/withAuth'
import { useCreatePortfolio } from '@/actions/portfolios'
import { Redirect } from '@/components/shared'

const AddPortfolio = ({ user, loading: userLoading }) => {

    const [createPortfolio, { data, loading, error }] = useCreatePortfolio()

    if (data) {
        return <Redirect route='/portfolios' />
    }

    return (
        <BaseLayout user={user} loading={userLoading} >
            <BasePage header="Create Portfolio">
                <Row>
                    <Col md="8">
                        <PortfolioForm onSubmit={createPortfolio} />
                        {error && <div className="alert alert-danger mt-2">{error}</div>}
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(AddPortfolio)('admin');
