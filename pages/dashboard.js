import Link from 'next/link'
import { Row, Col } from 'reactstrap';
import { BasePage, BaseLayout } from 'components';
import { withAuth } from 'utils/auth0';
import { Dashead } from 'components/shared';

const Dashboard = ({ user }) => {
    return (
        <BaseLayout navClass="transparent" user={user} loading={false}>
            <Dashead background="/images/dashboard.jpg" />
            <BasePage className="blog-user-page">
                <Row>
                    <Col md="6" className="mx-auto text-center">
                        <h2 className="blog-status-title"> Published Blogs </h2>
                    </Col>
                    <Col md="6" className="mx-auto text-center">
                        <h2 className="blog-status-title"> Draft Blogs </h2>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export const getServerSideProps = withAuth()('admin');

export default Dashboard
