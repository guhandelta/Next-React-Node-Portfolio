import Head from 'next/head'
import { Container } from 'reactstrap' // Wrapping the component using this, will add left and right padding

const BasePage = props => {
    const {
        indexPage,
        className = '',
        header,
        children,
        metaDescription = "Hello, I am Guhaprasaanth Nandagopal, an experienced software engineer and freelance developer. I possess experience in working with a variety of web development projects, developing and managing enterprise websites or web applications, as UI developer or as a Fullstack Developer . I constantly work on updating my skillsets by practicing what I learn, with any of my personal or freelance projects, or at work.",
        title = "Portfolio - Guhaprasaanth"
    } = props;
    const pageType = indexPage ? 'index-page' : 'base-page';
    return (
        <>
            <Head>
                <title>{title}</title>
                {/* name attr of meta described the0 metata, eg: description, keywords,.....etc */}
                {/*viewport => window area displaying web content | initial-scale is set a normal | viweport width => width of screen of-
                -the device on which the page is viewed */}
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" key="description" content={metaDescription} />
                <meta name="title" key="title" content={title} />
            </Head>
            <div className={`${pageType} ${className}`}>
                <Container>
                    {header &&
                        <div className="page-header">
                            <h1 className="page-header-title">{header}</h1>
                        </div>
                    }
                    {children}
                </Container>
            </div>
        </>
    )
}

export default BasePage

