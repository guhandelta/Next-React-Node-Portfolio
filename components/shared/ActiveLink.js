

import React, { Children } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ActiveLink = ({ children, ...props }) => {
    const router = useRouter();
    const child = Children.only(children); //To check if the child provided is a single level element => /blog not /blog/tech/add-one/...
    let className = child.props.className || ''; //Extracting className from child element || className, if available or empty text

    if (router.asPath === props.href && props.activeClass) { // if url path after / and href prop & active class is in component prop,-
        //- assign active class to the header link title
        className = `${className} ${props.activeClass}`
    }

    delete props.activeClass; //Removing activeClass prop from the props, before Link accesses the props to destructurize it, for its use

    return <Link {...props}>{React.cloneElement(child, { className })}</Link>
    // Constructing `Link`, with destructurizing props, received by thie component | `props` will now hold, only the `href` prop, from-
    //- the `ActiveLink` element, as the `activeClass` prop was removed from the props, before the `Link` element accessed the props
    // Link provides only the `href` prop to the React.cloneElement() => <a>, where the classNames are directly appended to the element-
    //- without passing it to/through the `Link` element
    // {React.cloneElement(child, { className })} => creates a clone of `child element`, which is the `<a>` and appends the `activeClass`
}

export default ActiveLink

