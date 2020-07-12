import React, { Component } from 'react'
import axios from 'axios'
// import Link from 'next/link'
import { BaseLayout } from '../components/layouts'
import { BasePage } from '../components/'
import { Link } from '../routes'


class Portfolios extends Component {

    static async getInitialProps() {
        let posts = [];

        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
            posts = res.data;
        } catch (err) {
            console.error(err);
        }
        return { posts: posts.slice(0, 10) };
    }

    renderPosts(posts) {
        return posts.map(post =>
            <li key={post.id}>
                <Link route={`portfolios/${post.id}`}>
                    <a>
                        {post.title}
                    </a>
                </Link>
            </li>
        )
    }

    render() {
        const { posts } = this.props;
        return (
            <BaseLayout>
                <BasePage>
                    <h1>Portfolios Page</h1>
                    <ul>
                        {this.renderPosts(posts)}
                    </ul>
                </BasePage>
            </BaseLayout>
        )
    }
}
export default Portfolios;
