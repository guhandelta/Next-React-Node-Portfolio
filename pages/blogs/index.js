import { Row, Col, Container } from 'reactstrap';
import { BasePage, BaseLayout, Dashead, BlogCard } from 'components'
import { useGetUser } from 'actions/user'
import BlogsApi from 'lib/api/blogs'

const Blog = ({ blogs }) => {
    const { data, loading } = useGetUser();
    debugger
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
                    {
                        blogs.map(blog =>
                            <Col key={blog._id} md="10" lg="8" className="mx-auto">
                                <BlogCard blog={blog} />
                                <hr></hr>
                            </Col>
                        )
                    }
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

// getStaticProps gets called at build time due to which it does not receive data that’s only available during request time,
//-  such as query parameters or HTTP headers, as it generates static HTML.
export async function getStaticProps() {
    const jsonBlogs = await new BlogsApi().getAll();
    return {
        props: { blogs: jsonBlogs.data },
        unstable_revalidate: 60 //Refetch the data every 60secs
    }
}

export default Blog;