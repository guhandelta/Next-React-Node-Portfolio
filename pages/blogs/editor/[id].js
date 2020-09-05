import { toast } from 'react-toastify'
import withAuth from 'hoc/withAuth'
import { BasePage, BaseLayout } from '@/components'
import { Editor } from 'slate-simple-editor'
import { useCreateBlogpost } from 'actions/blogs'



const BlogUpdater = ({ user, loading }) => {



    return (
        <BaseLayout user={user} loading={loading} >
            <BasePage>
                <Editor
                    header="Update your blogpost..."
                    onSave={() => { }}
                />
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(BlogUpdater)('admin');
