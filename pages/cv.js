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
                        <iframe style={{ width: '100%', height: '55em' }} src="https://drive.google.com/file/d/1Df1hVb7piSh5REjaVmddQcKfRcuLs8Im/preview" frameborder="0"></iframe>
                       {/* <object data="https://drive.google.com/file/d/1Df1hVb7piSh5REjaVmddQcKfRcuLs8Im/view" type="application/pdf"></object> */}
                    </Col>
                </Row>
            </BasePage> 
        </BaseLayout>
    )
}

export default Cv;
