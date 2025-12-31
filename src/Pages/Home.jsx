import Com from "../component";
import logo from "../assets/whitelogo.png";
import carouselOne from "..//assets/carousel1.jpg";
import gelatoOne from "..//assets/gelato-mockup1.jpg";
import gelatoTwo from "..//assets/gelato-mockup2.jpg";
import gelatoThree from "..//assets/gelato-mockup3.png";
import gelatoFour from "..//assets/gelato-mockup4.jpg";
import gelatoFive from "..//assets/gelato-mockup5.jpg";
import Footer from "..//Footer";

const Home = () => {
    return (
        <>
        <Com />
        <div className=" container-fluid" style={{backgroundColor:"#2c2825"}}>
            <div className="d-flex justify-content-center home-container container"> 
                <div className="hero rounded-5 d-flex flex-column align-items-center mb-5">
                    <img src={logo} className="logo-dropshadow" width="60%" alt="" />
                    <h1 className="home-heading mb-3">Let Us Sweeten Your Next Event!</h1>
                    <p className="home-paragraph w-50 pt-3">Our unique Giulato Gelato cart brings both the feel
                        and taste of elegance to any event. Select from a
                        wide range of gelato and sorbetto flavors and let us
                        take care of the rest!</p>
                    <div id="carousel-ind" className="carousel slide mb-5" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carousel-ind" data-bs-slide-to="0" 
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                             <button type="button" data-bs-target="#carousel-ind" data-bs-slide-to="1" aria-label="Slide 2"></button>
                             <button type="button" data-bs-target="#carousel-ind" data-bs-slide-to="2" aria-label="Slide 3"></button>
                             <button type="button" data-bs-target="#carousel-ind" data-bs-slide-to="3" aria-label="Slide 4"></button>
                             <button type="button" data-bs-target="#carousel-ind" data-bs-slide-to="4" aria-label="Slide 5"></button>
                             <button type="button" data-bs-target="#carousel-ind" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div> 
                        <div className="carousel-inner rounded-5 " style={{height:"100vh", width:"50vw"}}>
                            <div style={{height:"100vh"}} className="carousel-item active">
                                <img src={carouselOne}  height="100%" className="object-fit-cover rounded-5 w-100" alt="..."></img>
                            </div>
                            <div style={{height:"100vh"}} className="carousel-item">
                                <img src={gelatoOne}  height="100%"  className="object-fit-cover w-100 rounded-5" alt="..."></img>
                            </div>
                            <div style={{height:"100vh"}} className="carousel-item">
                                <img src={gelatoTwo}  height="100%"  className="object-fit-cover w-100 rounded-5" alt="..."></img>
                            </div>
                            <div style={{height:"100vh"}} className="carousel-item">
                                <img src={gelatoThree}  height="100%"  className="object-fit-cover w-100 rounded-5" alt="..."></img>
                            </div>
                            <div style={{height:"100vh"}} className="carousel-item">
                                <img src={gelatoFour}  height="100%"  className="object-fit-cover w-100 rounded-5" alt="..."></img>
                            </div>
                            <div style={{height:"100vh"}} className="carousel-item">
                                <img src={gelatoFive} style={{objectPosition:"50% 90%"}}  height="100%"  className="object-fit-cover w-100 rounded-5" alt="..."></img>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-ind" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-ind" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div> 
        <Footer />
        </>
    )
}

export default Home;