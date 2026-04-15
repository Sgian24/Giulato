import GuilatoLogo from ".//assets/Giulato-white.png";
import Cart from ".//assets/Cart.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const Com = () => {

  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); 
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);


  
    return (
        <>
        <div className="container-fluid nav-fluid-container p-0 mb-4">
          <div className="nav-bar container d-flex justify-content-between align-items-center pt-4 pe-4 ps-4">
           <a href="/"><img className="navLogo" src={GuilatoLogo} alt="" height="auto" /></a>
            <div className="d-flex link-container align-items-center justify-content-end pt-3 gap-0 gap-md-5">
                <Link to="/menu" className="nav-link me-5">Flavours</Link>
                <Link to="/Order" className="nav-link me-5">Packages</Link>
                <Link to="/Order/#inquire" className="nav-link">contact</Link>
                <img className="navcart" src={Cart} height="auto" width="9%" alt="" />
            </div>
          </div>
          <div className="m-0 p-0 line"></div>
        </div>
        </>
    )
}

export default Com;