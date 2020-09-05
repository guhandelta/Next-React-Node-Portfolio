import Link from 'next/link'
import { Row, Col } from 'reactstrap';
import { BasePage, BaseLayout } from 'components';
import { withAuth } from 'utils/auth0';
import auth0 from 'utils/auth0';
import { Dashead, PortButtonDropdown } from 'components';
import BlogsApi from 'lib/api/blogs'

const Dashboard = ({ user, blogs }) => {


    const confirmStatus = blogStatus => blogStatus === 'draft' ? { label: 'Publish Story', value: 'published' }
        : { label: 'Make it a Draft', value: 'draft' }
    const dropdownOptions = (blog) => {
        const option = confirmStatus(blog.status);

        return [
            { key: `${blog._id} => Published`, text: option.label, handlers: { onClick: () => { alert(`Changing Status to ${option.value}`) } } },
            { key: `${blog._id} => Deleted`, text: 'Delete', handlers: { onClick: () => { alert('Delete') } } }]
    }


    const renderBlogs = (blogs, status) =>
        <ul className="user-blogs-list">
            {
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
        <BaseLayout navClass="transparent" user={user} loading={false}>
            <Dashead background="/images/dashboard.jpg" />
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

export const getServerSideProps = withAuth(async ({ req, res }) => {
    const { accessToken } = await auth0.getSession(req);
    const json = await new BlogsApi(accessToken).getByUser();
    return { blogs: json.data }
})('admin');

export default Dashboard
