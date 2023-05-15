import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';

import '../styles/Footer.css';
function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon/>
        <GitHubIcon/>
        <LinkedInIcon/>
        <FacebookIcon/>
        <MailIcon/>
      </div> 
      <p>&copy; 2023 thaoAlita.com</p>
    </div>
  )
}

export default Footer
