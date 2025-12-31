import GuilatoLogo from ".//assets/Giulato-white.png";
import Cart from ".//assets/Cart.svg";

const Com = () => {
    return (
        <>
        <div className="container-fluid nav-fluid-container p-0 mb-4">
          <div className="nav-bar container d-flex justify-content-between align-items-center pt-4 pe-4 ps-4">
            <img className="navLogo" src={GuilatoLogo} alt="" height="auto" />
            <div className="d-flex link-container align-items-center justify-content-end pt-3 gap-5">
                <a className="nav-link me-5">menu</a>
                <a className="nav-link me-5">order</a>
                <a className="nav-link">contact</a>
                <img className="" src={Cart} height="auto" width="9%" alt="" />
            </div>
          </div>
          <div className="m-0 p-0 line"></div>
        </div>
        </>
    )
}

export default Com;