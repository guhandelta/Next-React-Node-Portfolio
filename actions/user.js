import useSWR from 'swr'
import { fetcher } from '@/actions'


// The user data is fetched by making a fetch() call to the /api/v1/me endpoint, using useSWR
export const useGetUser = () => {
    const { data, error, ...rest } = useSWR('/api/v1/me', fetcher);
    return { data, error, loading: !data && !error, ...rest };
}
