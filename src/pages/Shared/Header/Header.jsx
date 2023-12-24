// import { useContext } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/logo.png";
// import { AuthContext } from "../../../providers/AuthProvider";
// import Headroom from "react-headroom";

const Header = () => {
  const NavLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/",
      title: "Products",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/blog",
      title: "Blog",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];

  // const { user } = useContext(AuthContext);

  return (
    <div className="header-area">
      {/* <Headroom> */}
      <Navbar collapseOnSelect expand="lg">
        <Container className="d-flex justify-content-between align-items-center">
          <NavLink to="/">
            <Image className="site-logo" src={logo} alt="Abarian" />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mx-auto">
              {NavLinks.map(({ path, title }) => (
                <NavLink to={path} key={path}>
                  {title}
                </NavLink>
              ))}
            </Nav>
            <div className="d-flex align-items-end header-login-btn">
              <NavLink to="/login" className="login-btn">
                Login
              </NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* </Headroom> */}
    </div>
  );
};

export default Header;
