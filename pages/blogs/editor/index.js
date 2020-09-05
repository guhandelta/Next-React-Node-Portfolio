import { toast } from 'react-toastify'
import withAuth from 'hoc/withAuth'
import { BasePage, BaseLayout } from '@/components'
import { Editor } from 'slate-simple-editor'
import { useCreateBlogpost } from 'actions/blogs'


const BlogEditor = ({ user, loading }) => {

    const [createBlog, { data: newBlogpost, error }] = useCreateBlogpost();

    const saveBlog = async data => {
        debugger;
        await createBlog(data);
        console.log(data);
        alert('Blogpost created successfully!!....');
    }

    if (error) { toast.error(error.message); }

    return (
        <BaseLayout user={user} loading={loading} >
            <BasePage>
                <Editor header="Compose your new blogpost" loading={true} onSave={saveBlog} />
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(BlogEditor)('admin');
