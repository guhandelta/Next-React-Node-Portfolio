import Link from 'next/link'
import { Row, Col, Container } from 'reactstrap';
import { BasePage, BaseLayout, Dashead } from 'components'
import { useGetUser } from 'actions/user'

const Blog = () => {
    const { data, loading } = useGetUser();
    return (
        <BaseLayout
            navClass="transparent" className="blog-listing-page"
            user={data} loading={loading}>
            <Dashead background="/images/dashboard.jpg" title="Blogs" subtitle="Checkout all the blogs">
                <h1>Fresh Blogs</h1>
                <span className="subheading">Programming, travelling...</span>
            </Dashead>
            <BasePage
                className="blog-body">
                <Row>
                    <Col md="10" lg="8" className="mx-auto">
                        <div>
                            <div className="post-preview clickable">
                                <Link href="#">
                                    <a>
                                        <h2 className="post-title">
                                            Some Title
                                        </h2>
                                        <h3 className="post-subtitle">
                                            Some Subtitle
                                        </h3>
                                    </a>
                                </Link>
                                <p className="post-meta">Posted by
                                    <a href="#"> Guhaprasaanth </a>
                                    - 11/11/2011
                                </p>
                            </div>
                            <hr></hr>
                        </div>
                    </Col>
                    <Col md="10" lg="8" className="mx-auto">
                        <div>
                            <div className="post-preview clickable">
                                <Link href="#">
                                    <a>
                                        <h2 className="post-title">
                                            Some Title
                                        </h2>
                                        <h3 className="post-subtitle">
                                            Some Subtitle
                                        </h3>
                                    </a>
                                </Link>
                                <p className="post-meta">Posted by
                                    <a href="#"> Filip Jerga </a>
                                    - 11/11/2011
                                </p>
                            </div>
                            <hr></hr>
                        </div>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default Blog;
