import { Col, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icons from "../Utilities/Icons/icons";
import "../CSS/nav.css";

const MyNavbar=({isOpen,setIsopen})=> {
    return (
        <nav className="navbar-custom">
          
          <div className="left-content" id="navbarNavDropdown">
            <div className='togle-container'>
                <img onClick={()=>setIsopen(true)} className='toggle-img' src={icons.Toggle} alt="" />
            </div>
           <a  className="logo" href="#">
            CA Society
          </a>
           <input className='search'
          placeholder="search users,room or setting"
        >
      </input>
      <img className='search-icon' src={icons.Search} />

          </div>

          <div className="right-container " id="navbarNavDropdown">
            
            <div className='right-container-namediv'>
                <div className='name'>Name</div>
                <div className='online-status'>Online</div>
            </div>
            <div className='proifile-imgdiv'>
            
            </div>
          </div>
        </nav>
      );
}

export default MyNavbar;