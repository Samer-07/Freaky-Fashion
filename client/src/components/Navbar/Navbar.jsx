import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = ({ logo, faSearch, lista, icons }) => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (searchTerm.trim() !== "") {
      navigate(`/search?q=${searchTerm}`); 
    }
  };

  return (
    
    <header className="navbar">
    <div className="top-section">
      <div className="logo-search">
        <Link to="/"> 
          <img className="logo" src={logo} alt="logo" />
        </Link>
        
        <form className="search-container" onSubmit={handleSearch}>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Sök produkt..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>

        <div className="icons">
          {icons.map((item, index) => (
            <a key={index} href={item.link}>
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </div>

      <nav className="menu">
        <ul>
          {lista.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
