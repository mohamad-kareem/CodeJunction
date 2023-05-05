import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./footer.css"
import CopyRight from '../CopyRight/CopyRight';

const footerLinks = [
  { label: 'Mobile app', url: 'https://CodeJunction.com/mobile-app' },
  { label: 'Community', url: 'https://CodeJunction/community' },
  { label: 'Company', url: 'https://CodeJunction/company' },
  { label: 'Help desk', url: 'https://CodeJunction/help-desk' },
  { label: 'Blog', url: 'https://CodeJunction/blog' },
  { label: 'Resources', url: 'https://CodeJunction/resources' },
];

const Footer = () => {
  return (
    <div className="footer">
    <div className="info">
      {footerLinks.map((link,index)=>(
        <a href={link.url} key={index}>
          <p className='footer-details'>{link.label}</p>
        </a>
      ))}
    </div>
    <div className="connect">
        <div className="icons-container">
            <FacebookIcon className='icons'/>
            <GitHubIcon className='icons'/>
            <TwitterIcon className='icons'/>
            <CopyRight/>
        </div>
    </div>
</div>
  )
}

export default Footer
