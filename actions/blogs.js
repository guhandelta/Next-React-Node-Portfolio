import axios from 'axios'
import useSWR from 'swr';
import { useApiHandler, fetcher } from 'actions' // @/ is no longer required as NextJS 9.4.x 's absolute path, takes care of it => app folder-
//- base url -> jsconfig.json

const createBlog = data => axios.post('/api/v1/blogs', data);
const updateBlog = (id, data) => axios.patch(`/api/v1/blogs/${id}`, data);
// const deleteBlog = (id) => axios.delete(`/api/v1/blogs/${id}`);

export const useCreateBlogpost = () => useApiHandler(createBlog);
export const useUpdateBlog = () => useApiHandler(updateBlog);
// export const useDeleteBlog = () => useApiHandler(deleteBlog);

// Another way of calling the funcitons, to shorten the code
// export const useCreateBlog = () => useApiHandler((data) => axios.post('/api/v1/blogs', data));

export const useGetBlog = (id) => {
    const { data, error, ...rest } = useSWR(id ? `/api/v1/blogs/${id}` : null, fetcher);
    return { data, error, loading: !data && !error, ...rest };
}

export const useGetUserBlogs = () => {
    const { data, error, ...rest } = useSWR('/api/v1/blogs/me', fetcher);
    return { data, error, loading: !data && !error, ...rest };
}

