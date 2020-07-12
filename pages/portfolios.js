import axios from 'axios'
import { BaseLayout } from '../components/layouts'
import { BasePage } from '../components/'
import { Link } from '../routes'


const Portfolios = ({ posts }) => {

    const renderPosts = (posts) => {
        return posts.map(post =>
            <li key={post.id} style={{ 'fontSize': '20px' }}>
                <Link route={`/portfolios/${post.id}`}>
                    <a>
                        {post.title}
                    </a>
                </Link>
            </li>
        )
    }

    return (
        <BaseLayout>
            <BasePage>
                <h1>Portfolios Page</h1>
                <ul>
                    {renderPosts(posts)}
                </ul>
            </BasePage>
        </BaseLayout>
    )
}

Portfolios.getInitialProps = async () => {
    let posts = [];

    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts = res.data;
    } catch (err) {
        console.error(err);
    }
    return { posts: posts.slice(0, 10) };
}
export default Portfolios;
