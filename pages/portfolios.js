import React, { Component } from 'react'
import axios from 'axios'
// import Link from 'next/link'
import { BaseLayout } from '../components/layouts'
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
        return { portfolio: posts.slice(0, 10) };
    }

    render() {
        const { portfolio } = this.props;
        return (
            <BaseLayout>
                <h1>Portfolios Page</h1>
                <ul>
                    {
                        portfolio.map(post => {
                            return (
                                <li key={post.id}>
                                    <Link route={`portfolios/${post.id}`}>
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
