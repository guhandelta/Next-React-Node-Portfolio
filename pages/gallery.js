import { Row, Col } from 'reactstrap';
import { BaseLayout, BasePage } from 'components';
import { useGetPictures } from '@/actions'
import { useRouter } from 'next/router'
import { gapi } from 'gapi-script'
import Image from 'next/image' // Will convert the images to a web optimized format `webp` and the size-
//- gets reduced | It also provides Lazy Loading, by loading the images from the server, that are not in-
//- the browser's view port, only when the user scrolls over to those images. This optimizes images-
//- on-demand, instead of doing it at build time, which helps to keep the build time the same, irrespective-
//- of the number of images

const Gallery = (props) => {
    const { data: pictures = [] } = useGetPictures();
    const router = useRouter();

    return (
        <BaseLayout>
            <BasePage className="about-page" title="Pictures me - Guhaprasaanth">
                {/* Enabled Locale based routing, localhost:3000/ta/.. | guhaprasaanth.vercel.app/ta/..-
                - also works even if a local specific page is availabe or not | separate button may be-
                - provided on the page to route to the page designed for a differrnt locale */}
                {/* <p>Current Locale: {props.locale}</p> */}
                {/* <p>Default Locale: {router.defaultLocale}</p> */}
                {/* props.locales will be an array, so it needs to be stringified, for it to be displayed */}
                {/* <p>All Locales: {JSON.stringify(props.locales)}</p> */}
                <Row className="mt-5">
                    {pictures.map(picture => 
                            <Col 
                                md="3" 
                                style={{ marginBottom: '20px'}}//marginBottom was moved to a higher-
                                //-level as it won't work in Image
                                key={picture.id}
                            >
                                {/* Since the images are fetched from an unverified host, it should be 
                                mentioned in the configuration file, that the source is authentic 
                                quality- Image quality 1-100 | 75 is default*/}
                                <Image 
                                    src={picture.download_url} 
                                    quality="50"
                                    width={picture.width}
                                    height={picture.height}
                                    layout="responsive"
                                />
                            </Col>
                        )
                    }
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export const getStaticProps = ({ locale, locales }) => {
    return{
        props: {
            locale,
            locales
        }
    }
}

export default Gallery;
