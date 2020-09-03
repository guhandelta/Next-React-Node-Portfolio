import withAuth from '@/hoc/withAuth'
import { BasePage, BaseLayout } from '@/components'
import { Editor } from 'slate-simple-editor'

const BlogEditor = ({ user, loading }) => {

    const saveBlog = data => console.log(data);

    return (
        <BaseLayout user={user} loading={loading} >
            <BasePage>
                <Editor header="What's the Title?" loading={true} onSave={saveBlog} />
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(BlogEditor)('admin');
