import { useState } from 'react'
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
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
const BsNavBrand = () => (
    <Link href="/">
        <a className="nav-link port-navbar-link "> Guhaprasaanth </a>
    </Link>
);

const LoginLink = () => <span className="nav-link port-navbar-link clickable">Login</span>
const LogoutLink = () => <span className="nav-link port-navbar-link clickable">Logout</span>

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
                {/* <NavbarBrand className="port-navbar-brand my-name" href="/">Guhaprasaanth</NavbarBrand> */}
                <BsNavBrand />
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
                    <Nav navbar>
                        <NavItem className="port-navbar-item">
                            <LoginLink />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <LogoutLink />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    )

}

export default Header;
