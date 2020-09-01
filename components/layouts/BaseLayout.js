import { Header } from '../shared'
import { ToastContainer } from 'react-toastify';

const BaseLayout = props => {
    const { className, children, navClass = "with-bg", user, loading } = props;
    return (
        <div className="layout-container">
            <Header className={navClass} user={user} loading={loading} />
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                </div>
            </main>
            <ToastContainer />
        </div>
    )
}

export default BaseLayout

