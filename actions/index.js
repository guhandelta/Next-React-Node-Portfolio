import { useEffect, useState } from 'react'

export const useGetPosts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(); // Error is set to be undefined by default, by not providing any initial value
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Cannot defn useEffet as async, but can write async fn() inside useEffect()
        async function getPosts() {
            const res = await fetch('/api/v1/posts');
            const result = await res.json();

            if (res.status !== 200) {
                setError(result);
            } else {
                setPosts(result);
            }
            setLoading(false); //Settign Loading to false as the data feth is complete
        }

        getPosts();

    }, []); // empty [] => useEffect() is called only once

    return { posts, error, loading };
}
