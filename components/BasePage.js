import { Container } from 'reactstrap' // Wrapping the component using this, will add left and right padding

const BasePage = props => {
    const { className = '', header, children } = props;
    return (
        <div className={`base-page ${className}`}>
            <Container>
                {header &&
                    <div className="page-header">
                        <h1 className="page-header-title">{header}</h1>
                    </div>
                }
                {children}
            </Container>
        </div>
    )
}

export default BasePage

