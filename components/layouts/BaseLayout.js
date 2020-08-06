import { Header } from '../shared'

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
        </div>
    )
}

export default BaseLayout

