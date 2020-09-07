import { Row, Col } from 'reactstrap'
import { BaseLayout, BasePage } from 'components'
import { useGetUser } from 'actions/user'

const Cv = () => {
    const { data, loading } = useGetUser();
    return (
        <BaseLayout user={data} loading={loading} >
            <BasePage title="CV - Guhaprasaanth">
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <iframe style={{ width: '100%', width: '55em' }} src="/ngp_cv.pdf" frameborder="0"></iframe>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default Cv;
