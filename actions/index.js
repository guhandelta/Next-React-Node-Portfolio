import { useState } from 'react';
import useSWR from 'swr'

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
            return json.data; //return the daat in case os success
        } catch (err) {
            console.log(err.response.data);
            const message = (err.response && err.response.data) || 'Oops!!..... Something went wrong!....';
            setReqState({ error: message, data: null, loading: false });
            return Promise.reject(message); // To make sure the error in the request is thrown, rather than providing it in the res-
            //- The promise is rejected here, so the error does not resolve into correct promise, as like in the try block
        }
    }
    return [handler, { ...reqState }]
}


export const useGetPictures = () => useSWR('https://picsum.photos/v2/list', fetcher);