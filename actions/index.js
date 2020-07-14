import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(async res => {
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
