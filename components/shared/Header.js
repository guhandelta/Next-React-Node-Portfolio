import { useState } from 'react'
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { isAuthorized } from '@/utils/auth0'

const BSNavLink = props => {
    const { title, href, className } = props;
    return (
        <Link href={href}>
            <a className={`nav-link port-navbar-link ${className}`}>
                {title}
            </a>
        </Link>
    );
}
const BsNavBrand = () => (
    <Link href="/">
        <a className="nav-link port-navbar-link my-name"> Guhaprasaanth </a>
    </Link>
);

const LoginLink = () => <a className='nav-link port-navbar-link' href="/api/v1/login">Login</a>
const LogoutLink = () => <a className='nav-link port-navbar-link' href="/api/v1/logout">Logout</a>

const AdminMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dropdown
            className="port-navbar-link port-dropdown-menu"
            nav
            isOpen={isOpen}
            toggle={() => setIsOpen(!isOpen)}
        >
            <DropdownToggle className="port-dropdown-toggle" nav caret>
                Admin
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    <BSNavLink className="port-dropdown-item" title="Home" href="/portfolios/new" title="Create Portfolio" />
                </DropdownItem>
                <DropdownItem>
                    <BSNavLink className="port-dropdown-item" title="Home" href="/blogs/editor  " title="Create Blogpost" />
                </DropdownItem>
                <DropdownItem>
                    <BSNavLink className="port-dropdown-item" title="Home" href="/blogs/dashboard" title="Dashboard" />
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

const Header = ({ user, loading, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar
                className={`port-navbar port-default absolute ${className}`}
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
                        {!loading &&
                            <>
                                {user &&
                                    <>
                                        {isAuthorized(user, 'admin') && <AdminMenu />}
                                        <NavItem className="port-navbar-item">
                                            <LogoutLink />
                                        </NavItem>
                                    </>
                                }
                                {!user &&
                                    <NavItem className="port-navbar-item">
                                        <LoginLink />
                                    </NavItem>
                                }
                            </>
                        }

                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    )

}

export default Header;
