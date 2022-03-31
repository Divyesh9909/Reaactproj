import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page">
                <Link to="/Home" className="btn">
                  Home
                </Link>
              </Link>
            </li>
            <li class="nav-item">
              <span class="nav-link">
                <Link to="/Articles" className="btn">
                  Article
                </Link>
              </span>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to="/product"
              >
                Product
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <span class="dropdown-item">
                    <Link to="/Men">Men</Link>
                  </span>
                </li>
                <li>
                  <span class="dropdown-item">
                    <Link to="/Women">Women</Link>
                  </span>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <span class="dropdown-item">
                    <Link to="/Kids">Kids</Link>
                  </span>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link disabled"></Link>
            </li>
            {/* <a class="nav-link">
              <Link to="/SingleProductPage">SingleProduct</Link>
            </a> */}
          </ul>
          <span class="nav-link">
            <Link to="/Cart">Cart</Link>
            <FaShoppingCart size={30} />
          </span>

          <span class="nav-link">
            <Link to="/Registration">Registration</Link>
            <FaUserPlus size={30} />
          </span>
        </div>
      </div>
    </nav>
  );
}

// <form class="d-flex">
//   <input
//     class="form-control me-2"
//     type="search"
//     placeholder="Search"
//     aria-label="Search"
//   />
//   <button class="btn btn-outline-success" type="submit">
//     Search
//   </button>
// </form>;

// ----------------------------------------------

// import React, { Component } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   MDBNavbar,
// //   MDBNavbarBrand,
// //   MDBNavbarNav,
// //   MDBNavItem,
// //   MDBNavLink,
// //   MDBNavbarToggler,
// //   MDBCollapse,
// //   MDBDropdown,
// //   MDBDropdownToggle,
// //   MDBDropdownMenu,
// //   MDBDropdownItem,
// //   MDBIcon,
// // } from "mdbreact";
// import { BrowserRouter as Router } from "react-router-dom";

// class Header extends Component {
//   state = {
//     isOpen: false,
//   };

//   toggleCollapse = () => {
//     this.setState({ isOpen: !this.state.isOpen });
//   };

//   render() {
//     return (
//       <Router>
//         {/* <Navbar color="default-color" dark expand="md"> */}
//         <NavbarBrand>
//           <strong className="white-text">Navbar</strong>
//         </NavbarBrand>
//         <NavbarToggler onClick={this.toggleCollapse} />
//         {/* <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar> */}
//         <NavbarNav left>
//           <NavItem active>
//             <NavLink to="/home">Home</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink to="/Articales">Features</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink to="/products">Pricing</NavLink>
//           </NavItem>
//           <NavItem>
//             <Dropdown>
//               <DropdownToggle nav caret>
//                 <div className="d-none d-md-inline">Dropdown</div>
//               </DropdownToggle>
//               <DropdownMenu className="dropdown-default">
//                 <DropdownItem href="/Women">Action</DropdownItem>
//                 <DropdownItem href="/Men">Another Action</DropdownItem>
//                 <DropdownItem href="/kids">Something else here</DropdownItem>
//                 <DropdownItem href="#!">Something else here</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </NavItem>
//         </NavbarNav>
//         {/* <NavbarNav right> */}
//         <NavItem>
//           <NavLink className="waves-effect waves-light" to="#!">
//             <Icon fab icon="twitter" />
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink className="waves-effect waves-light" to="#!">
//             <Icon fab icon="google-plus-g" />
//           </NavLink>
//         </NavItem>
//         {/* <NavItem> */}
//         <Dropdown>
//           <DropdownToggle nav caret>
//             <Icon icon="user" />
//           </DropdownToggle>
//           <DropdownMenu className="dropdown-default">
//             <DropdownItem href="#!">Action</DropdownItem>
//             <DropdownItem href="#!">Another Action</DropdownItem>
//             <DropdownItem href="#!">Something else here</DropdownItem>
//             <DropdownItem href="#!">Something else here</DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//         {/* <NavItem> */}
//         {/* </NavbarNav> */}
//         {/* </Collapse> */}
//         {/* </Navbar> */}
//       </Router>
//     );
//   }
// }

// export default Header;
