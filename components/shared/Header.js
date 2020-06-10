import { Component } from 'react';
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
            <a className="nav-link">
                {title}
            </a>
        </Link>
    );
}


export default class Header extends Component {
    state = { isOpen: false }
    toggle = () => this.setState({ isOpen: !this.state.isOpen })
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand>
                        <Link href="/">
                            <a className='nav-link name'>
                                Guhaprasaanth
                            </a>
                        </Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <BSNavLink title="Home" href="/" />
                            </NavItem>&emsp;&nbsp;
                            <NavItem>
                                <BSNavLink title="About" href="/about" />
                            </NavItem>&emsp;&nbsp;
                            <NavItem>
                                <BSNavLink title="Portfolios" href="/portfolios" />
                            </NavItem>&emsp;&nbsp;
                            <NavItem>
                                <BSNavLink title="Blogs" href="/blogs" />
                            </NavItem>&emsp;&nbsp;
                            <NavItem>
                                <BSNavLink title="CV" href="/cv" />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

