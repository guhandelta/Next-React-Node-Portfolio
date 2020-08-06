
import { Row, Col } from 'reactstrap'
import { BaseLayout, BasePage, PortfolioForm } from '@/components/'

import withAuth from '@/hoc/withAuth'

const AddPortfolio = ({ user, loading }) => {
    debugger;
    return (
        <BaseLayout user={user} loading={loading} >
            <BasePage header="Create Portfolio">
                <Row>
                    <Col md="8">
                        <PortfolioForm />
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(AddPortfolio)('admin');
