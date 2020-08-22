import { useState } from 'react';

export const fetcher = (url) => fetch(url).then(async res => {
    const result = await res.json();

    if (res.status !== 200) {
        return Promise.reject(result);
    } else {
        return result;
    }
});

export function useApiHandler(apiCallHandler) { // Just anonyomizing the API calls

    const [reqState, setReqState] = useState({
        error: null,
        data: null,
        loading: false
    });

    const handler = async (...data) => { //Any API calls passed in, will resolve to data
        setReqState({ error: null, data: null, loading: true });
        try {
            const json = await apiCallHandler(...data);
            setReqState({ error: null, data: json.data, loading: false });
        } catch (err) {
            const message = (err.response & err.response.message) || 'Oops!!..... Something went wrong!....';
            setReqState({ error: message, data: null, loading: false });
        }
    }
    return [handler, { ...reqState }]
}
