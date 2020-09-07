import Head from 'next/head'
import { Container } from 'reactstrap' // Wrapping the component using this, will add left and right padding

const BasePage = props => {
    const {
        indexPage,
        className = '',
        header,
        children,
        title = "Portfolio - Guhaprasaanth"
    } = props;
    const pageType = indexPage ? 'index-page' : 'base-page';
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>{title}</title>
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

