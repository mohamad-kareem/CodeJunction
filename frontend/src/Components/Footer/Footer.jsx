import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./footer.css"
import CopyRight from '../CopyRight/CopyRight';
const Footer = () => {
  return (
    <div className="footer">
    <div className="info">
    <a href="https://CodeJunction.com/mobile-app"><p className='footer-details'>Mobile app</p></a>
    <a href="https://CodeJunction/community"><p className='footer-details'>Community</p></a>
    <a href="https://CodeJunction/company"><p className='footer-details'>Company</p></a>
    <a href="https://CodeJunction/help-desk"><p className='footer-details'>Help desk</p></a>
    <a href="https://CodeJunction/blog"><p className='footer-details'>Blog</p></a>
    <a href="https://CodeJunction/resources"><p className='footer-details'>Resources</p></a>
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
