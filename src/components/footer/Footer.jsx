import './Footer.css';
import logo from '../../accets/main/logo.svg'
import face from '../../accets/footer/face.png'
import insta from '../../accets/footer/insta.png'
import what from '../../accets/footer/what.png'
function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt="logo" className="footer-logo" />
            <div className="footer-address">
                <p className="footer-adress">Address</p>
                <p className="footer-address-address">Svobody str. 35 <br /> Kyiv <br /> Ukraine</p>
            </div>
            <div className="footer-contact">
                <p className="footer-contact-text">Contact us</p>
                <div className="footer-contact-container">
                    <a target='_blank' href="https://www.instagram.com/">
                        <img src={insta} alt="face" className="footer-contact-container-icon" />
                    </a>
                    <a target='_blank' href="https://www.facebook.com/"><img src={face} alt="insta" className="footer-contact-container-icon" /></a>
                    <a target='_blank' href="https://www.whatsapp.com/"><img src={what} alt="what" className="footer-contact-container-icon" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
