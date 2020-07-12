import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'


const Portfolios = () => { //Assigning empty array as def value for posts, so it won't complain abt not having any posts
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // Cannot defn useEffet as async, but can write async fn() inside useEffect()
        async function getPosts() {
            const res = await fetch('/api/v1/posts');
            const data = await res.json();
            setPosts(data);
        }

        getPosts();

    }, []); // empty [] => the fn() is called only once

    const renderPosts = (posts) => {
        return posts.map(post =>
            <li key={post.id} style={{ 'fontSize': '20px' }}>
                <Link as={`/portfolios/${post.id}`} href="/portfolios/[id]">
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

export default Portfolios;
