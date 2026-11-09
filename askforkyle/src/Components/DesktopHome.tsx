import kpLogo from "../assets/KPLogo.png";

function DesktopHome() {
  return (
    <main className="desktop-home">
        <img src={kpLogo} alt="kp-logo" className="kp-logo" />
        <h1>Kyle Pixley</h1>
        <p>Wireless Sales Consultant</p>
        <p>Cellular Sales | Verizon Authorized Retailer</p>
        <a 
            href='/contact.vcf'
            download="Kyle-Pixley.vcf"
            className='contact-button primary'>
            Save My Contact
        </a>
    </main>
  )
}

export default DesktopHome;