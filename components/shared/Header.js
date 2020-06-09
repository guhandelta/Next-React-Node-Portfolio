import React, { Component } from 'react'
import Link from 'next/link'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Link href="/">
                    <a>
                        Home
                    </a>
                </Link>
                <Link href="/about">
                    <a>
                        About
                    </a>
                </Link>
                <Link href="/portfolio">
                    <a>
                        Portfolios
                    </a>
                </Link>
                <Link href="/blogs">
                    <a>
                        Blogs
                    </a>
                </Link>
                <Link href="/cv">
                    <a>
                        Cv
                    </a>
                </Link>
            </React.Fragment>
        );
    }
}
export default Header;
