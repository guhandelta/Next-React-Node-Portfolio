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
                </Link>&emsp;
                <Link href="/about">
                    <a>
                        About
                    </a>
                </Link>&emsp;
                <Link href="/portfolios">
                    <a>
                        Portfolios
                    </a>
                </Link>&emsp;
                <Link href="/blogs">
                    <a>
                        Blogs
                    </a>
                </Link>&emsp;
                <Link href="/cv">
                    <a>
                        Cv
                    </a>
                </Link>&emsp;
            </React.Fragment>
        );
    }
}
export default Header;
