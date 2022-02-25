import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
export default function Header() {
  return (
    // <header className="Header">
    //     <nav className="Nav">
    //         <Link to="/Home">
    //             Home
    //         </Link>

    //         <Link to="/Articles">
    //             Articles
    //         </Link>

    //         <Link to="/About">
    //             About
    //         </Link>

    //         <button>Logout</button>
    //     </nav>
    // </header>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
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
              <a class="nav-link active" aria-current="page" href="#">
                <Link to="/Home">Home</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <Link to="/Articles">Article</Link>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    <Link to="/Men">Men</Link>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <Link to="/Women">Women</Link>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <Link to="/Kids">Kids</Link>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled"></a>
            </li>
          </ul>
          <a class="nav-link" href="#">
            <Link to="/Question">Cart</Link>
            <FaShoppingCart />
          </a>

          <a class="nav-link" href="#">
            <Link to="/Registration">Registration</Link>
            <FaUserPlus />
          </a>

          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
