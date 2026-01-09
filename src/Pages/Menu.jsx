import Com from "../component";
import banner from "..//assets/banner.jpg";
import gelatoOne from "..//assets/gelato1.jpg";
import gelatoTwo from "..//assets/gelato2.png";
import vegan from "..//assets/natural.png";
import natural from "..//assets/vegan.png";
import gelatoThree from "..//assets/Vegan_Pic.png";
import Footer from "..//Footer"

const Menu = () => {
    return (
        <>
        <Com />
        <div className="d-flex flex-column align-items-center p-0 container-fluid" style={{backgroundColor:"#2c2825"}}>
            <div className="d-flex flex-column justify-content-center menu-container container"> 
                <div className="divider mb-4">
                    <h1 className="popular-flavors">Popular Flavors</h1>
                </div>
            </div>
            <div className="banner-container mb-5">
                <img className="banner" style={{objectFit: "cover"}} src={banner} width="100%" alt="" />
            </div>
            <p className="menu-paragraph w-50">
            Your choice of gelato flavors are made with milk, and sweetened with natural
            ingredients. The result is a rich flavor, without any artificial colours or flavouring.
            We offer 100% dairy-free, and vegan friendly sorbettos, as well as vegan gelato, 
            made with rice milk.
            </p>
            <p className="menu-paragraph w-50 mb-5">We offer a wide range of flavors for gelato, sorbetto and vegan gelato.
            Below, are some of our more popular flavors:</p>
            <button className="order-button btn rounded-4 mb-5" type="button">order now</button>
            <div className="w-100 d-flex mb-5 justify-content-center container" style={{gap:"10vw"}}>
                <div>
                    <h2 className="gelato-heading mb-3">Gelato</h2>
                    <ul className="p-0">
                        <li>Amarena</li>
                        <li>Blueberry Lavender <img className="ms-2" src={natural} height="auto" width="20vw" alt="" /></li>
                        <li>Caffe <img className="ms-2" src={natural} height="auto" width="20vw" alt="" /></li>
                        <li>Nocciola</li>
                        <li>Pistaccio</li>
                        <li>Tiramisu</li>
                        <li>Salted Chocolate Peanut Butter</li>
                        <li>Tequila Mojito</li>
                        <li>Bacio</li>
                        <li>Nutella</li>
                    </ul>
                </div>
                <div className="menu-image-container">
                    <img className="menu-image rounded-circle" src={gelatoOne}  alt="" />
                </div>
            </div>
            <div className="w-100 d-flex justify-content-center mb-5 container" style={{gap:"10vw"}}>
                <div className="menu-image-container">
                    <img className="menu-image rounded-circle" src={gelatoTwo}  alt="" />
                </div>
                <div className="">
                    <h2 className="gelato-heading mb-3" style={{paddingLeft:"9rem"}}>Sorbetta</h2>
                    <ul className="reverse-list">
                        <li>Limone</li>
                        <li>Mango</li>
                        <li>Pineapple Coconut </li>
                        <li>Raspberry</li>
                        <li>Strawberry</li>
                        <li>Watermelon</li>
                    </ul>
                </div>
            </div>
            <div className="w-100 d-flex gap-5 justify-content-center container" style={{marginBottom:"10vw"}}>
                <div>
                    <h2 className="gelato-heading mb-3">Vegan Flavours <img src={vegan} height="auto" width="50vw" alt="" /></h2>
                    <ul className="p-0">
                        <li>Blueberry Lavender</li>
                        <li>Caffe</li>
                        <li>Coconut</li>
                        <li>Maple</li>
                        <li>Peanut Butter & Jelly</li>
                        <li>Pistaccio</li>
                    </ul>
                </div>
                <div className="menu-image-container">
                    <img className="menu-image rounded-circle" src={gelatoThree}  alt="" />
                </div>
            </div>
            <div className="d-flex flex-column align-items-center" style={{marginBottom:"20vw"}}>
                <h2 className="inquire mb-5">Inquire today about our seasonal flavours</h2>
                <button className="order-button btn rounded-4 mb-5" type="button">order now</button>
            </div>
            <Footer />
        </div>
        
            
        </>

    )
}

export default Menu;