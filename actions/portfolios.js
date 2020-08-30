import useSWR from 'swr';
import axios from 'axios'
import { useApiHandler, fetcher } from '@/actions'

const createPortfolio = (data) => axios.post('/api/v1/portfolios', data);

export const useCreatePortfolio = () => useApiHandler(createPortfolio);

// Another way of calling the funcitons, to shorten the code
// export const useCreatePortfolio = () => useApiHandler((data) => axios.post('/api/v1/portfolios', data));

export const useGetPortfolio = (id) => {
    const { data, error, ...rest } = useSWR(id ? `/api/v1/portfolios/${id}` : null, fetcher);
    return { data, error, loading: !data && !error, ...rest };
}
