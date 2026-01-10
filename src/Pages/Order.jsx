import Com from "..//component";
import Footer from "..//Footer";
import { Link } from "react-router-dom";

const Order = () => {

    return (
        <>
        <Com />
        <div className="d-flex flex-column align-items-center p-0 container-fluid" style={{backgroundColor:"#f5e5d0"}}>
            <div className="d-flex flex-column align-items-center justify-content-center menu-container container" style={{backgroundColor:"#f5e5d0"}}> 
                <div className="divider-black mb-4">
                    <h1 className="popular-flavors" style={{color:"black"}}>Experiences</h1>
                </div>
                <h2 className="customize mb-4">Customize your GELATO Experience</h2>
                <p className="order-paragraph w-50">No matter the size of your event, we offer options to best suit your
                needs and your guests. Please complete the inquiry form for all
                events, from a small gathering and weddings, to corporate events,
                and everything in between.</p>
            </div>
            <div className="d-flex flex-column align-items-center p-0 pt-5 mb-5 container-fluid" style={{backgroundColor:"#2c2825"}}>
                <h1 className="cart-requirements w-75 text-center mb-5" id="cart-re">Cart Requirements</h1>
                <div className="d-flex flex-column flex-sm-row container align-items-center">
                    <p className="cart-requirements-paragraph w-50 pe-5">Our unique Giulato cart will need a <span className="italicbold">clear
                    path</span>, <u>without stairs</u> to your location of
                    choice. The cart will require a passageway
                    that is <span className="italicbold">36 inches wide.</span> <br /> <br />
                    Please ensure that an unobstructed path is
                    available, with <span className="italicbold">access to an electrical outlet </span>
                     at the chosen venue to prevent any issues or
                    delays.
                    </p>
                    <div className="cart-list w-50 ps-5 mb-5" style={{borderLeft:"solid 1px #f5e5d0"}}>
                        <p className="ms-3 cart-heading">Giulato Cart Experience Includes:</p>
                        <ul>
                            <li className="cart-li">Our unique Giulato Gelato cart</li>
                            <li  className="cart-li">Transportation, set-up and teardown</li>
                            <li  className="cart-li">2 hours of service</li>
                            <li  className="cart-li">Minimum of 1 professional live server</li>
                            <li  className="cart-li">Choice of up to 6 flavors (depending on
                             size of event)</li>
                            <li  className="cart-li">Served in our signature Giulato cups, with
                            a cookie, spoon and napkin</li>
                            <li  className="cart-li">Customized cups are available for a fee.</li>
                            <li  className="cart-li"> Additional transportation fees may be
                            applicable to events outside of the GTA.</li>
                        </ul>
                    </div>
                </div>
                <a href="#inquire">
                    <button className="book-button btn rounded-3 mb-5" type="button">book now</button>
                </a>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column align-items-center mb-4">
                        <h6 style={{fontStyle:"italic", fontFamily:"poppinsRegular", color:"#f5e5d0"}}>Have a smaller event?</h6>
                        <p className="cart-requirements-paragraph w-75 text-center">Giulato offers pre-packaged cups for your smaller events
                        of less than 100 people. Please inquire to learn more!</p>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center container" style={{backgroundColor:"#f5e5d0"}}> 
                <div className="divider-black mb-4">
                    <h1 className="popular-flavors" id="inquire" style={{color:"black"}}>Inquire</h1>
                </div>
                <form target="_blank" className="mb-3" action="https://formsubmit.co/info@giulatogelato.com" method="POST">
                    <div className="input-container d-flex gap-5 mb-3">
                    <div>
                        <label htmlFor="name" className="form-label">First Name</label>
                        <input type="text" name="Name" className="form-control first-name" id="name" placeholder="name" required/>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="form-label">Last Name</label>
                        <input type="text" name="Last name" className="form-control" id="last-name" placeholder="surname"/>
                    </div>
                    </div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="Email" className="form-control mb-3" id="email" placeholder="email address" required/>
                    <label htmlFor="date" className="form-label">Event Date</label>
                    <input type="date" name="Date" className="form-control mb-3" id="date" placeholder="surname" />
                    <div className="input-container-two d-flex gap-5 mb-3">
                        <div>
                            <label htmlFor="number-of-guests" className="form-label">Number of Guests</label>
                            <input type="number" name="Number of Guests" className="form-control guests" id="number-of-guests" placeholder="00" />
                        </div>
                        <div>
                            <label htmlFor="start-time" className="form-label">Start Time</label>
                            <input type="time" name="Start Time" className="form-control guests" id="time" />
                        </div>
                        <div>
                            <label htmlFor="end-time" className="form-label">End Time</label>
                            <input type="time" name="End Time" className="form-control" id="time" />
                        </div>
                    </div>
                    <div className="mb-3">
                            <label htmlFor="event-type" className="form-label">Type of Event</label>
                            <select type="time" name="Type of Event" className="form-select" id="event-type">
                                <option selected>Please Select</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Shower">Shower</option>
                                <option value="Corporate">Corporate</option>
                                <option value="Brand Activation">Brand Activation</option>
                                <option value="VIP Event">VIP Event</option>
                                <option value="Charity/Community">Charity/Community</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>                
                    <textarea type="text" name="Details" className="form-control mb-5" rows="7" placeholder="Please provide additional details of your event."/>
                    <button type="submit" className="book-button btn rounded-3 mb-5" style={{backgroundColor:"black", color:"#f5e5d0"}}>Submit</button>
                </form>
            </div>
            <div className="contact-container d-flex pt-5 pb-5 align-items-center justify-content-center container-fluid" style={{backgroundColor:"#2c2825", height:"25vw"}}> 
                    <div className="contact-div d-flex container justify-content-center w-50 me-2 me-sm-0">
                        <h1 className="contact-us" id="contact-us-link">Contact Us</h1>
                    </div>
                    <div className="contact-links-container pt-5 pb-5 ps-5 w-50" style={{borderLeft:"solid 1px #f5e5d0"}}>
                        <div className="mb-3">
                        <a href="mailto:info@giulatogelato.com"> 
                            <i className="bi bi-envelope-at me-3 me-sm-5" style={{fontSize:"1.5rem", color: "#f5e5d0"}}></i>
                        </a>
                            <span className="contact-links" >info@giulatogelato.com</span>
                        </div>
                        <div className="mb-3">
                        <a href="https://www.instagram.com/giulatogelato" target="_blank">
                            <i className="bi bi-instagram me-3 me-sm-5" style={{fontSize:"1.5rem", color: "#f5e5d0"}}></i>
                        </a>
                            <span className="contact-links" >@giulatogelato</span>
                        </div>
                        <div>
                            <i className="bi bi-telephone me-3 me-sm-5" style={{fontSize:"1.5rem", color: "#f5e5d0"}}></i>
                            <span className="contact-links" >647-385-9986</span>
                        </div>
                    </div>
            </div>
            
        </div>
        <Footer />
        </>
    )
}

export default Order;