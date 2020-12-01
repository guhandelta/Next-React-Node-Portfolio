import React from 'react'
import { Row, Col, Container } from 'reactstrap';
import { BasePage, BaseLayout, Dashead, BlogCard } from 'components'
import { useGetUser } from 'actions/user'
import BlogsApi from 'lib/api/blogs'
import { useRouter } from 'next/router'

const Blog = ({ blogs = '' }) => {
    const { data, loading } = useGetUser();
    const router = useRouter();
    if(router.isFallback){
        return <h1 className="cover-heading">The server is building the page</h1>
    }
    debugger
    return (
        <BaseLayout
            navClass="transparent"
            className="blog-listing-page"
            user={data}
            loading={loading}
        >
            <Dashead background="/images/dashboard.jpg" title="Blogs" subtitle="Checkout all the blogs">
                <h1>Fresh Blogs</h1>
                <span className="subheading">Programming, travelling...</span>
            </Dashead>
            <BasePage
                className="blog-body"
                title="Blogs - Guhaprasaanth"
                metaDescription="My personal blogspot"
            >
                <Row>
                    {
                        blogs.map(blog =>
                            <Col key={blog._id} md="10" lg="9" className="mx-auto">
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
    const { data } = await new BlogsApi().getAll();
    const blogs = data.map(item => ({ ...item.blog, author: item.author }))
    return {
        props: { blogs },
        revalidate: 60 //Refetch the data every 60secs
        // unstable_revalidate: 60 //Refetch the data every 60secs
    }
}

export default Blog;
