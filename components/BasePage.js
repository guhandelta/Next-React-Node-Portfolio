import Head from 'next/head'
import { useRouter } from 'next/router'
import { Container } from 'reactstrap' // Wrapping the component using this, will add left and right padding

const BasePage = props => {
    const router = useRouter();
    debugger
    const {
        indexPage,
        className = '',
        header,
        children,
        metaDescription = "Hello, I am Guhaprasaanth Nandagopal, an experienced software engineer and freelance developer. I possess experience in working with a variety of web development projects, developing and managing enterprise websites or web applications, as UI developer or as a Fullstack Developer . I constantly work on updating my skillsets by practicing what I learn, with any of my personal or freelance projects, or at work.",
        canonicalPath, //For cases where the canonical path needs to be specified
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
                <meta name="og:title" key="og:title" content={title} />
                <meta name="og:locale" key="og:locale" content="en_US" />
                <meta name="og:url" key="og:url" content={`${process.env.BASE_URL}${router.asPath}`} />
                <meta name="og:type" key="og:type" content="website" />
                <meta name="og:description" key="og:description" content={metaDescription} />
                <meta name="og:image" key="og:image" content={`${process.env.BASE_URL}/images/section-1.png`} />
                {/* A canonical tag (aka "rel canonical") is a way of telling search engines that a specific URL represents the master copy of a page.
                 Using the canonical tag prevents problems caused by identical or "duplicate" content appearing on multiple URLs.
                 Practically speaking, the canonical tag tells search engines which version of a URL you want to appear in search results. */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;1,700&display=swap" />
                <link rel="canonical" href={`${process.env.BASE_URL}${canonicalPath ? canonicalPath : router.asPath}`}></link>
                <link rel="icon" type="image/x-icon" href="/images/favicon.ico " />
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

