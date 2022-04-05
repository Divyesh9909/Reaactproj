import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import logo from "../Assest/Images/logo.png";
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
              <span class="nav-link">
                <Link to="/">
                  <img className="img-fluid " src={logo} alt="Logo" />
                </Link>
              </span>
            </li>

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
            <li class="nav-item">
              <span class="nav-link">
                <Link to="/About Us" className="btn">
                  About
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

// ==-----------Dropdown currentUser-------

// {
//   currentUser ? (
//     <div className="dropdown">
//       <div>
//         <button className="dropbtn">My Account</button>
//         {/* <li className="nav-item"> */}
//         <div className="dropdown-content">
//           <div className="child">
//             <Link to={"/profile"} className="nav-link">
//               {/* {currentUser.username} */}current user
//             </Link>
//             <Link
//               to={"/login"}
//               className="nav-link"
//               // onClick={this.logOut}
//             >
//               LogOut
//               <FaUserMinus />
//             </Link>
//           </div>
//           {/* </li> */}
//         </div>
//       </div>
//     </div>
//   ) : (
//     // </div>

//     <div className="navbar-nav ml-auto">
//       <li className="nav-item">
//         <Link to={"/login"} className="nav-link">
//           Login
//           <SiGnuprivacyguard />
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link to={"/Registration"} className="nav-link">
//           Sign Up
//           <FaUserPlus />
//         </Link>
//       </li>
//     </div>
//   );
// }
