import Link from 'next/link'
import moment from 'moment'

const BlogCard = ({ blog }) =>
    <div>
        <div className="post-preview clickable">
            <Link href="/blogs/[slug]" as={`/blogs/${blog.slug}`}>
                <a>
                    <h2 className="post-title">
                        {blog.title}
                    </h2>
                    <h3 className="post-subtitle">
                        {blog.subTitle}
                    </h3>
                </a>
            </Link>
            <p className="post-meta">Posted by
                                            <a href="#"> Guhaprasaanth Nandagopal </a>
                - {moment(blog.createdAt).format('LLLL')}
                {/* {blog.createdAt.split('T')[0].split('-').join(':')} => will just display YYYY:MM:DD */}
            </p>
        </div>
    </div>

export default BlogCard;
