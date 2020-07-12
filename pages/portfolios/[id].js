import axios from 'axios'
import { BaseLayout } from '../../components/layouts'
import { BasePage } from '../../components/'


const Portfolio = ({ portfolio }) => {

    return (
        <BaseLayout>
            <BasePage>
                <h1>Portfolio Page</h1>
                <h2>Title:&emsp;{portfolio.title}</h2>
                <p>Body:&emsp;{portfolio.body}</p>
                <p>ID:&emsp;{portfolio.id}</p>
            </BasePage>
        </BaseLayout>
    )
}

Portfolio.getInitialProps = async ({ query }) => {
    let post = {};
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
        post = res.data;
    } catch (err) {
        console.error(err);
    }
    return { portfolio: post };
}

export default Portfolio;
