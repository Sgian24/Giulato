import logo from "./assets/Giulato-black.png";

const Footer = () => {
    return (
        <>
        <div className="container-fluid" style={{backgroundColor:"#f5e5d0"}}>
            <div className="container footer d-flex justify-content-between align-items-center">
                <div className="">
                    <p className="trademark">© 2025 Giulato Gelato<br />
                    <span className="designed">Designed by Haus of Rogue <br />
                    Developed by Sunny Gian</span></p>
                </div>
                <div className="d-flex align-items-center">
                    <a href="https://www.google.ca" target="_blank"><i className="bi bi-facebook me-3" style={{fontSize:"1.5rem", color: "black"}}></i></a>
                    <a href="href=https://www.google.ca" target="_blank"><i className="bi bi-instagram me-5" style={{fontSize:"1.5rem", color: "black"}}></i></a>
                    <img className="footer-logo " src={logo} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;