import React, { Component } from 'react'
import axios from 'axios'
import { BaseLayout } from '../components/layouts'
import { BasePage } from '../components/'


class Portfolio extends Component {

    static async getInitialProps({ query }) {
        let post = [];
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
            post = res.data;
        } catch (err) {
            console.error(err);
        }
        return { portfolio: post };
    }

    render() {
        const { portfolio } = this.props;
        return (
            <BaseLayout>
                <BasePage>
                    <h2>{portfolio.title}</h2>
                    <p>{portfolio.body}</p>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolio;
