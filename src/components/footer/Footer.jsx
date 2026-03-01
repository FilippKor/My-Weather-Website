import './Footer.css';
import logo from '../../accets/main/logo.svg'
import face from '../../accets/footer/face.png'
import insta from '../../accets/footer/insta.png'
import what from '../../accets/footer/what.png'
function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt="logo" className="footer-logo"/>
            <div className="footer-address">
                <p className="footer-adress">Address</p>
                <p className="footer-address-address">Svobody str. 35 Kyiv Ukraine</p>
            </div>
            <div className="footer-contact">
                <p className="footer-contact-text">Contact us</p>
                <img src={face} alt="face" className="footer-contact-face"/>
                <img src={insta} alt="insta" className="footer-contact-insta"/>
                <img src={what} alt="what" className="footer-contact-what"/>
            </div>
        </div>
    )
}

export default Footer