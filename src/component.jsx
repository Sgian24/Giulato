import GuilatoLogo from ".//assets/Giulato-white.png";
import Cart from ".//assets/Cart.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Com = () => {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
    }
  }, []);
  
    return (
        <>
        <div className="container-fluid nav-fluid-container p-0 mb-4">
          <div className="nav-bar container d-flex justify-content-between align-items-center pt-4 pe-4 ps-4">
            <img className="navLogo" src={GuilatoLogo} alt="" height="auto" />
            <div className="d-flex link-container align-items-center justify-content-end pt-3 gap-5">
                <Link to="/Giulato/menu" className="nav-link me-5">menu</Link>
                <Link to="/Giulato/Order" className="nav-link me-5">order</Link>
                <Link to="/Giulato/Order/#contact-us-link" className="nav-link">contact</Link>
                <img className="" src={Cart} height="auto" width="9%" alt="" />
            </div>
          </div>
          <div className="m-0 p-0 line"></div>
        </div>
        </>
    )
}

export default Com;