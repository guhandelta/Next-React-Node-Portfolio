import Link from 'next/link'
 
const BlogCard = ({ blog }) =>
    <div>
        <div className="post-preview clickable">
            <Link href="#">
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
                {blog.createdAt}
            </p>
        </div>
    </div>

export default BlogCard;
