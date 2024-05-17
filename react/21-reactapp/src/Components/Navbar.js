import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/counter" class="nav-link" href="#">
                  Counter
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/mountingcomp" class="nav-link" href="#">
                  Mounting Comp
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/pagination" class="nav-link" href="#">
                  Pagination
                </Link>
              </li>
              <li>
                <Link to="/unmounting" class="nav-link" href="#">
                  Unmounting
                </Link>
              </li>
              <li>
              <Link to="/usestatecounter" class="nav-link" href="#">
                  usestatehook
                </Link>
              </li>
              <li>
              <Link to="/useeffecthook" class="nav-link" href="#">
                  useEffecthook
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contactus" class="nav-link" href="#">
                  Contactus
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/usecontext" class="nav-link" href="#">
                   UseContextHook
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/useref" class="nav-link" href="#">
                   UseRefHook
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
