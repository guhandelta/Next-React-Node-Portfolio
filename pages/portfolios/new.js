
import { Row, Col } from 'reactstrap'

import { BaseLayout, BasePage, PortfolioForm } from '@/components/'
import withAuth from '@/hoc/withAuth'
import { createPortfolio } from '@/actions/portfolios'

const AddPortfolio = ({ user, loading: userLoading }) => {

    const _createPortfolio = (data) => { //_ added to eliminate naming conflict
        createPortfolio(data);
        console.log(JSON.stringify(data));
    }

    // debugger;
    return (
        <BaseLayout user={user} loading={userLoading} >
            <BasePage header="Create Portfolio">
                <Row>
                    <Col md="8">
                        <PortfolioForm onSubmit={_createPortfolio} />
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(AddPortfolio)('admin');
