import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './Navbar.scss';

const Navbar = () => {

  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 992);

  const handleResize = () => {
    setIsCollapsed(window.innerWidth < 992);
  };
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
    
    <nav className={`navbar navbar-expand-lg navbar-light py-1 ${isCollapsed ? '' : 'bg-dark'}`}> { /* Navbar color for larger screens */ }
      <div className="container-fluid">
        <Link className="navbar-brand" to="#"></Link>
        <button className="navbar-toggler position-absolute" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav w-100 ">
            <li className="nav-item">
              <Link className="nav-link text-white px-0 px-sm-2 fs-5" to="/">Link</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white px-0 px-sm-2 fs-5" to="#">Link</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white px-0 px-sm-2 fs-5" to="#">Link</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white px-0 px-sm-2 fs-5" to="#">Link</Link>
            </li>
            {/* <li className="nav-item dropdown">
              <Link className="nav-link text-white text-center dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item bg-no" href="#">Action</Link></li>
                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;