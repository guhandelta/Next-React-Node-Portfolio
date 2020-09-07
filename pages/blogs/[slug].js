import { Row, Col } from 'reactstrap'
import { SlateView } from 'slate-simple-editor'
import { BaseLayout, BasePage } from 'components'
import { useGetUser } from 'actions/user'
import BlogsApi from 'lib/api/blogs'

const BlogDetail = ({ blog, author }) => {
    const { data, loading } = useGetUser();
    debugger;
    return (
        <BaseLayout user={data} loading={loading} >
            <BasePage className="slate-container">
                <Row>
                    <Col md={{ size: 8, offset: 2 }}> {/*Entire page, which is divided into 12 columns, will now be divided into 6 col ||
                    offset 2 will add 2 col padding on both sides*/}
                        <SlateView initialContent={blog.content} />
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export async function getStaticPaths() {
    const blogsJson = await new BlogsApi().getAll();
    const blogs = blogsJson.data;
    const paths = blogs.map(blog => ({ params: { slug: blog.slug } })); // Object with params : slug
    return { paths, fallback: false }; //fallback: false => resolve to 404 error
}

export async function getStaticProps({ params }) {
    const { data: { blog, user: author } } = await new BlogsApi().getBySlug(params.slug);
    return { props: { blog, author } };
}

export default BlogDetail;
