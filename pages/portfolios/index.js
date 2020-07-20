import Link from 'next/link'
import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'
import { useGetPosts } from '@/actions'
import { useGetUser } from '@/actions/user'

const Portfolios = () => {

    const { data, error, loading } = useGetPosts();
    const { data: userData, loading: userLoading } = useGetUser();
    // useSWR will execute the given fn() to fetch the data and assign the fetch result to teh data prop, depending on the result
    debugger;
    // onPageLoad => useGetPosts() returns an [] on the 1st call and after page is rendered, useEffect gets triggered and -
    //- sets the fetched data to the state, which will rerender the component => displaying the fetched data thru Portfolios()
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
        <BaseLayout user={userData} loading={userLoading} >
            <BasePage>
                <h1>Portfolios Page</h1>
                {loading &&
                    <h5>Loading Data.....</h5>
                }
                {data &&
                    <ul>
                        {renderPosts(data)}
                    </ul>
                }
                {error &&
                    <div className="alert alert-danger">
                        {error.message}
                    </div>
                }
            </BasePage>
        </BaseLayout>
    )
}

export default Portfolios;