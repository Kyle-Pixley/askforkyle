import React from 'react'

function MobileHome() {
  return (
    <main className='mobile-home'>
        <h1>Ask for Kyle</h1>
        <p>Kyle Pixley - Wireless Sales Consultant</p>
        <a 
            href='/contact.vcf'
            download="Kyle-Pixley.vcf"
            className='contact-button primary'>
            Save My Contact
        </a>
    </main>
  )
}

export default MobileHome