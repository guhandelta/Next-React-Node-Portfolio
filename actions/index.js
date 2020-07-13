import { useEffect, useState } from 'react'

export const useGetData = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState(); // Error is set to be undefined by default, by not providing any initial value
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Cannot defn useEffet as async, but can write async fn() inside useEffect()
        async function fetchData() {
            const res = await fetch(url);
            const result = await res.json();

            if (res.status !== 200) {
                setError(result);
            } else {
                setData(result);
            }
            setLoading(false); //Settign Loading to false as the data feth is complete
        }

        url && fetchData(); //Fetch data only if the URL is available

    }, [url]); // Fetch data whenever url changes

    return { data, error, loading };
}
