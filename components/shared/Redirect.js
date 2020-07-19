import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Redirect = ({ route }) => {
    const router = useRouter();

    useEffect(() => {
        router.push(route)
    }, []); // [] -> useEffect will be exe only once

    return null
}

export default Redirect
