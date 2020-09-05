import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import withAuth from 'hoc/withAuth'
import { BasePage, BaseLayout } from '@/components'
import { Editor } from 'slate-simple-editor'
import { useUpdateBlog, useGetBlog } from 'actions/blogs'



const BlogUpdater = ({ user, loading }) => {

    const router = useRouter();
    const { data } = useGetBlog(router.query.id);
    const [updateBlog, { error, loading: updateLoading }] = useUpdateBlog();

    const _updateBlog = async data => {
        await updateBlog(router.query.id, data);
        toast.success("Blog Updated successfully");
    }

    if (error) {
        toast.error(error);
    }

    return (
        <BaseLayout user={user} loading={loading} >
            <BasePage>
                {data && data.content &&
                    <Editor
                        header="Update your blogpost..."
                        initialContent={data.content}
                        onSave={_updateBlog}
                        loading={updateLoading}
                    />
                }
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(BlogUpdater)('admin');
