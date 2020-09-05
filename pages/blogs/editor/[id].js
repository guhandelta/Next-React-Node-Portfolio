import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import withAuth from 'hoc/withAuth'
import { BasePage, BaseLayout } from '@/components'
import { Editor } from 'slate-simple-editor'
import { useCreateBlogpost, useGetBlog } from 'actions/blogs'



const BlogUpdater = ({ user, loading }) => {

    const router = useRouter();
    const { data } = useGetBlog(router.query.id);
    debugger;

    return (
        <BaseLayout user={user} loading={loading} >
            <BasePage>
                {data && data.content &&
                    <Editor
                        header="Update your blogpost..."
                        initialContent={data.content}
                        onSave={() => { }}
                    />
                }
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(BlogUpdater)('admin');
