import { Container } from 'reactstrap' // Wrapping the component using this, will add left and right padding

const BasePage = props => {
    const { className = '', children } = props;
    return (
        <div className={`base-page ${className}`}>
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default BasePage

