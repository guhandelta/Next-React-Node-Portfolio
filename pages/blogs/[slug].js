import { BaseLayout, BasePage } from 'components'
import { useGetUser } from 'actions/user'

const BlogDetail = () => {
    const { data, loading } = useGetUser();
    debugger;
    return (
        <BaseLayout user={data} loading={loading} >
            <BasePage>
                <h1 className="my-name">Blog Detail Page</h1>
                <h2>Some detailed stuff about the blog</h2>
            </BasePage>
        </BaseLayout>
    )
}
export default BlogDetail;
