import kpLogo from '../assets/KPLogo.png';

function MobileHome() {
  return (
    <main className='mobile-home'>

        <img src={kpLogo} alt='KP Logo' className='kp-logo'/>

        <h1>Kyle Pixley</h1>

        <p>Wireless Sales Consultant</p>

        <p>Cellular Sales | Verizon Authorized Retailer</p>

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

    </main>
  )
}

export default MobileHome;