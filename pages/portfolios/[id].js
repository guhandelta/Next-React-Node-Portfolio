import axios from 'axios'
import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'
import { useGetPostById } from '@/actions'
import { useRouter } from 'next/router'


const Portfolio = () => {
    const router = useRouter();
    const { data: portfolio, error, loading } = useGetPostById(router.query.id);
    // router.query.id will be inititally undefined, which will cause an error, but useSWR will try again and get the page after the-
    //- id property is populated || conditional fetching is done here to not to make a fetch request where id param is undefined
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
