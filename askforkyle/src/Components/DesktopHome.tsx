import kpLogo from "../assets/KPLogo.png";
import phoneLogo from "../assets/smartphone-icon.png";
import serviceBars from "../assets/service-bars.png";
import shieldIcon from "../assets/shield-icon.png";
import homeIcon from "../assets/home-internet-icon.png";

function DesktopHome() {
  return (
    <main className="desktop-home">

        <img src={kpLogo} alt="kp-logo" className="kp-logo" />

        <h1>Kyle Pixley</h1>

        <p>Wireless Sales Consultant</p>

        <p>Cellular Sales | Verizon Authorized Retailer</p>

        <div className="links-parent">

          <a 
              href='/contact.vcf'
              download="Kyle-Pixley.vcf"
              className='contact-button primary'>
              Save My Contact
          </a>

          <a 
            href="mailto:kyle.pixley@cellularsales.com"
            className="contact-button">
            Email Me
          </a>

        </div>

          <div className="icon-container">

            <div className="icon-parents">
              <img src={phoneLogo} alt="phone-icon" className="phone-icon icons" />
              <p>Phones<br/>& Upgrades</p>
            </div>
            <div className="icon-parents">
              <img src={serviceBars} alt="service-icon" className="service-icon icons" />
              <p>Plans<br/>& Features</p>
            </div>
            <div className="icon-parents">
              <img src={shieldIcon} alt="shield-icon" className="shield-icon icons" />
              <p>Device<br/>Protection</p>
            </div>
            <div className="icon-parents">
              <img src={homeIcon} alt="home-icon" className="home-icon icons" />
              <p>Home<br/>Internet</p>
            </div>

          </div>

    </main>
  )
}

export default DesktopHome;