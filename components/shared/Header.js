import { useState } from 'react'
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

const BSNavLink = props => {
    const { title, href } = props;
    return (
        <Link href={href}>
            <a className="nav-link port-navbar-link">
                {title}
            </a>
        </Link>
    );
}


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar
                className="port-navbar port-default absolute"
                color="transparent"
                dark
                expand="md">
                <NavbarBrand className="port-navbar-brand" href="/">Guhaprasaanth</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="port-navbar-item">
                            <BSNavLink title="Home" href="/" />
                        </NavItem>&emsp;&nbsp;
                        <NavItem className="port-navbar-item">
                            <BSNavLink title="About" href="/about" />
                        </NavItem>&emsp;&nbsp;
                        <NavItem className="port-navbar-item">
                            <BSNavLink title="Portfolios" href="/portfolios" />
                        </NavItem>&emsp;&nbsp;
                        <NavItem className="port-navbar-item">
                            <BSNavLink title="Blogs" href="/blogs" />
                        </NavItem>&emsp;&nbsp;
                        <NavItem className="port-navbar-item">
                            <BSNavLink title="CV" href="/cv" />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    )

}

export default Header;
