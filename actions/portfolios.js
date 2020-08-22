import { useState } from 'react';
import axios from 'axios'
import { useApiHandler } from '@/actions'

const createPortfolio = (data) => axios.post('/api/v1/portfolios', data);

export const useCreatePortfolio = () => useApiHandler(createPortfolio);

// Another way of calling the funcitons, to shorten the code
// export const useCreatePortfolio = () => useApiHandler((data) => axios.post('/api/v1/portfolios', data));
