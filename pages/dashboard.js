import Link from 'next/link'
import { Row, Col, Button } from 'reactstrap';
import { BasePage, BaseLayout } from 'components';
import withAuth from 'hoc/withAuth';
import { Dashead, PortButtonDropdown } from 'components';
import { useUpdateBlog, useGetUserBlogs } from 'actions/blogs'
import { toast } from 'react-toastify';

const Dashboard = ({ user, loading }) => {

    const [updateBlog] = useUpdateBlog();
    const { data: blogs, mutate } = useGetUserBlogs();

    const modifyBlogStatus = async (blogId, status) => {
        await updateBlog(blogId, { status })
            .then(() => mutate())
            .catch(() => toast.error("Oops! Something went wrong...."))
        // mutate(); // mutate() can be called after modifying the blog, which will re-fetch useGetUserBlogs()
    }

    const confirmStatus = blogStatus => blogStatus === 'draft' ? { label: 'Publish Story', value: 'published' }
        : { label: 'Make it a Draft', value: 'draft' }

    const dropdownOptions = (blog) => {
        const option = confirmStatus(blog.status);

        return [
            {
                key: `${blog._id} => Published`,
                text: option.label,
                handlers: { onClick: () => modifyBlogStatus(blog._id, option.value) }
            },
            {
                key: `${blog._id}-delete`,
                text: 'Delete',
                handlers: { onClick: () => modifyBlogStatus(blog._id, 'deleted') }
            }
        ]
    }


    const renderBlogs = (blogs, status) =>
        <ul className="user-blogs-list">
            {blogs && // renderBlogsblogs = [], status) is another options/alternative
                blogs.filter(blog => blog.status === status).map(blog =>
                    <li key={blog._id}>
                        <Link href="/blogs/editor/[id]" as={`blogs/editor/${blog._id}`}>
                            <a>
                                {blog.title}
                            </a>
                        </Link>
                        <PortButtonDropdown items={dropdownOptions(blog)} />
                    </li>
                )
            }
        </ul>

    return (
        <BaseLayout navClass="transparent" user={user} loading={loading}>
            <Dashead background="/images/dashboard.jpg" title="Blogs Dashboard">
                <h1>Blogs Dashboard</h1>
                <span className="subheading">
                    <Link href="/blogs/editor">
                        <Button color="primary">Create a new blog</Button>
                    </Link>
                </span>
            </Dashead>
            <BasePage className="blog-user-page">
                <Row>
                    <Col md="6" className="mx-auto text-center">
                        <h2 className="blog-status-title"> Published Blogs </h2>
                        {renderBlogs(blogs, 'published')}
                    </Col>
                    <Col md="6" className="mx-auto text-center">
                        <h2 className="blog-status-title"> Draft Blogs </h2>
                        {renderBlogs(blogs, 'draft')}
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

// Replacing this feature of getting the data from serverside by fetching data from client
// export const getServerSideProps = withAuth(async ({ req, res }) => {
//     const { accessToken } = await auth0.getSession(req);
//     const json = await new BlogsApi(accessToken).getByUser();
//     return { blogs: json.data }
// })('admin');

export default withAuth(Dashboard)('admin');
