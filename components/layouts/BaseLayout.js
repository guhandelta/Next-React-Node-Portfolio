import { Header } from '../shared'

const BaseLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default BaseLayout

