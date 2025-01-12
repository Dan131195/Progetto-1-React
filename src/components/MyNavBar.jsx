const MyNavBar = function () {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid p-0">
          <a className="navbar-brand" href="index.html">
            <img
              src="../../public\assets\Img\netflix_logo.png"
              alt="Logo Netflix"
              id="logo"
            />
          </a>
          <button
            className="navbar-toggler btn btn-outline-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-secondary"
                  href="javascript:void(0)"
                >
                  Tv Shows
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-secondary"
                  href="javascript:void(0)"
                >
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-secondary"
                  href="javascript:void(0)"
                >
                  Recently added
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-secondary"
                  href="javascript:void(0)"
                >
                  My List
                </a>
              </li>
            </ul>
            <a href="#">
              <i className="bi bi-search text-white mx-2"></i>
            </a>
            <a
              href="#"
              id="kids"
              className="text-secondary mx-2 text-decoration-none"
            >
              KIDS
            </a>
            <a href="#">
              <i className="bi bi-bell-fill mx-2 text-secondary"></i>
            </a>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-secondary bg-black border-0 dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="public\assets\Img\avatar.png"
                  alt="Avatar"
                  id="avatar"
                />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-lg-end bg-black"
                id="dropdownMenu"
              >
                <li>
                  <a
                    id="dropdown"
                    className="dropdown-item text-white"
                    href="#"
                  >
                    User #1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Manage Profiles
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Account
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0)">
                    Help Center
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>
                  <a className="dropdown-item" type="button">
                    Signout Netflix
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MyNavBar;
