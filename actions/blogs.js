import axios from 'axios'
import { useApiHandler } from 'actions' // @/ is no longer required as NextJS 9.4.x 's absolute path, takes care of it => app folder-
//- base url -> jsconfig.json

const createBlog = data => axios.post('/api/v1/blogs', data);

export const useCreateBlogpost = () => useApiHandler(createBlog);
