import useSWR from 'swr';
import axios from 'axios'
import { useApiHandler, fetcher } from 'actions' // @/ is no longer required as NextJS 9.4.x 's absolute path, takes care of it => app folder-
//- base url -> jsconfig.json

const createPortfolio = (data) => axios.post('/api/v1/portfolios', data);
const updatePortfolio = (id, data) => axios.patch(`/api/v1/portfolios/${id}`, data);
const deletePortfolio = (id) => axios.delete(`/api/v1/portfolios/${id}`);

export const useCreatePortfolio = () => useApiHandler(createPortfolio);
export const useUpdatePortfolio = () => useApiHandler(updatePortfolio);
export const useDeletePortfolio = () => useApiHandler(deletePortfolio);

// Another way of calling the funcitons, to shorten the code
// export const useCreatePortfolio = () => useApiHandler((data) => axios.post('/api/v1/portfolios', data));

export const useGetPortfolio = (id) => {
    const { data, error, ...rest } = useSWR(id ? `/api/v1/portfolios/${id}` : null, fetcher);
    return { data, error, loading: !data && !error, ...rest };
}
