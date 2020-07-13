import axios from 'axios'
import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'
import { useGetData } from '@/actions'
import { useRouter } from 'next/router'


const Portfolio = () => {
    const router = useRouter();
    const { data: portfolio, error, loading } = useGetData(router.query.id ? `/api/v1/posts/${router.query.id}` : null);
    // property: alias
    return (
        <BaseLayout>
            <BasePage>
                {loading && <h5>Loading Data.....</h5>}
                {error && <div className="alert alert-danger">{error.message}</div>}
                {portfolio &&
                    <>
                        <h1>Portfolio Page</h1>
                        <h2>Title:&emsp;{portfolio.title}</h2>
                        <p>Body:&emsp;{portfolio.body}</p>
                        <p>ID:&emsp;{portfolio.id}</p>
                    </>
                }
            </BasePage>
        </BaseLayout>
    )
}


export default Portfolio;
