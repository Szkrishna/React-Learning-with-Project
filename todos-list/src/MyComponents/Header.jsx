import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";

export const Header = ({ title, onSearch }) => {
  const currentPage = useLocation().pathname;
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgba(52, 152, 219, 0.6)" }}>
      <div className="container-fluid py-2 px-4">
        <Link className="navbar-brand" href="#">{title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={currentPage === '/' ? 'nav-link active' : 'nav-link'} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={currentPage === '/about' ? 'nav-link active' : 'nav-link'} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'} to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className={currentPage === '/add-todo' ? 'nav-link active' : 'nav-link'} to="/add-todo">Add Todo</Link>
            </li>
          </ul>
          {currentPage === '/' ? <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input className="form-control me-2" type="search"  placeholder="Search Todos" 
              aria-label="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <button className="btn btn-light" type="submit">Search</button>
          </form> : ""}
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}
