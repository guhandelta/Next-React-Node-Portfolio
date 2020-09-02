import { BasePage, BaseLayout } from 'components'
import { useGetUser } from 'actions/user'

const Blog = () => {
    const { data, loading } = useGetUser();
    return (
        <BaseLayout user={data} loading={loading} >
            <BasePage>
                <h1>Blog Page</h1>
            </BasePage>
        </BaseLayout>
    )
}

export default Blog;
