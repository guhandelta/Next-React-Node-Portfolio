import React from 'react'
import { Row, Col } from 'reactstrap'
import { SlateView } from 'slate-simple-editor'
import { Avatar, BaseLayout, BasePage } from 'components'
import { useGetUser } from 'actions/user'
import BlogsApi from 'lib/api/blogs'

const BlogDetail = ({ blog, author }) => {
    const { data, loading } = useGetUser();
    console.log(blog);
    debugger;
    return (
        <BaseLayout user={data} loading={loading} >
            <BasePage
                className="slate-container"
                title={`${blog.title} - Guhaprasaanth`}
                metaDescription={blog.subTitle}
            >
                <Row>
                    <Col md={{ size: 8, offset: 2 }}> {/*Entire page, which is divided into 12 columns, will now be divided into 6 col ||
                    offset 2 will add 2 col padding on both sides*/}
                        <Avatar
                            image={author.picture}
                            name={author.name}
                            date={blog.createdAt}
                        />
                        <hr />
                        <SlateView initialContent={blog.content} />
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export async function getStaticPaths() {
    const { data } = await new BlogsApi().getAll();
    const paths = data.map(({ blog }) => ({ params: { slug: blog.slug } })); // Object with params : slug
    return { paths, fallback: false }; //fallback: false => resolve to 404 error
     //- fallback: true => When req to a page that does not exist is made, this fn() will re-run to-
    //- fetch the page and return the path of the newely generated page 
    // This is much useful for /portfolios than /blogs, as the newly created blogs would be under drafts-
    //- and are visible on the blogs page only after that blog is published, from the dasboard
}

export async function getStaticProps({ params }) {
    const { data: { blog, author } } = await new BlogsApi().getBySlug(params.slug);
    return {
        props: {
            blog,
            author,
            revalidate: 1 // NextJS will attempt to re-generate the page when a request comes in at most, once every 1 second
            // unstable_revalidate: 1 // NextJS will attempt to re-generate the page when a request comes in at most, once every 1 second
        }
    };
}

export default BlogDetail;
