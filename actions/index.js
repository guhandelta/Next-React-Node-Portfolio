import useSWR from 'swr'

export const fetcher = (url) => fetch(url).then(async res => {
    const result = await res.json();

    if (res.status !== 200) {
        return Promise.reject(result);
    } else {
        return result;
    }
});

export const useGetPosts = () => {
    const { data, error, ...rest } = useSWR('/api/v1/posts', fetcher); //Returns an Object with data and error
    //SWR does provide any data about loading state by default, and it will be undefined, so loading state is calc and sent in res obj
    return { data, error, loading: !data && !error, ...rest };
}

export const useGetPostById = (id) => {
    // Using conditional fetching from SWR, the useSWR() is instructed to fetch the data, only when the id param is available
    const { data, error, ...rest } = useSWR(id ? `/api/v1/posts/${id}` : null, fetcher); //Returns an Object with data and error
    //SWR does provide any data about loading state by default, and it will be undefined, so loading state is calc and sent in res obj
    return { data, error, loading: !data && !error, ...rest };
}
