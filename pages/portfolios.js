import React, { Component } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { BaseLayout } from '../components/layouts'

class Portfolios extends Component {

    static async getInitialProps() {
        let posts = [];

        try {

            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = res.data;
        } catch (err) {
            console.error(err);
        }
        return { posts: posts.slice(0, 10) };
    }

    render() {
        const { posts } = this.props;
        return (
            <BaseLayout>
                <h1>Portfolios Page</h1>
                <ul>
                    {
                        posts.map(post => {
                            return (
                                <li key={post.id}>
                                    <Link as={`portfolios/${post.id}`} href={`portfolios/[id]`}>
                                        <a>
                                            {post.title}
                                        </a>
                                    </Link>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
            </BaseLayout>
        )
    }
}
export default Portfolios;
