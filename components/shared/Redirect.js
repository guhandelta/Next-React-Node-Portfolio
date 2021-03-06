import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Redirect = ({ route, ssr }) => {
    const router = useRouter();

    useEffect(() => {
        if (ssr) {
            window.location.pathname = route;
        } else {
            router.push(route)
        }
    }, []); // [] -> useEffect will be exe only once

    return null;
}

export default Redirect
