import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import withAuth from 'hoc/withAuth'
import { BasePage, BaseLayout } from '@/components'
import { Editor } from 'slate-simple-editor'
import { useCreateBlogpost } from 'actions/blogs'


const BlogEditor = ({ user, loading }) => {

    const router = useRouter();
    const [createBlog, { data: newBlogpost, error, loading: blogLoading }] = useCreateBlogpost();

    const saveBlog = async data => {
        // debugger;
        const createdBlogpost = await createBlog(data);
        console.log(data);
        router.push('/blogs/editor/[id]', `/blogs/editor/${createdBlogpost._id}`)
    }

    if (error) { toast.error(error.message); }

    return (
        <BaseLayout user={user} loading={loading} >
            <BasePage>
                <Editor
                    header="Compose your new blogpost"
                    loading={blogLoading}
                    onSave={saveBlog}
                />
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(BlogEditor)('admin');
