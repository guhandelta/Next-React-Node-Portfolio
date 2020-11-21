import { Row, Col } from 'reactstrap';
import { BaseLayout, BasePage } from 'components';
import { useGetPictures } from '@/actions'

const Gallery = () => {
    const { data: pictures = [] } = useGetPictures();
    console.log(pictures);

    return (
        <BaseLayout>
            <BasePage className="about-page" title="Pictures me - Guhaprasaanth">
                <Row className="mt-5">
                    {pictures.map(picture => 
                            <Col md="3" key={picture.id}>
                                <img 
                                    style={{width: '100%', marginBottom: '20px'}}
                                    src={picture.download_url} 
                                    alt=""
                                />
                            </Col>
                        )
                    }
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default Gallery;
