import React from 'react'
import Facbook from "../../icons/fb.png";
import  GitHub from "../../icons/git.png";
import Instagram from "../../icons/twit.png";
import Twitter from  "../../icons/twit.png";

const Footer = () => {
  return (
    <div className="footer">
    <div className="info">
    <a href="https://CodeJunction.com/mobile-app"><p className='info-details'>Mobile app</p></a>
    <a href="https://CodeJunction/community"><p className='info-details'>Community</p></a>
    <a href="https://CodeJunction/company"><p className='info-details'>Company</p></a>
    <a href="https://CodeJunction/help-desk"><p className='info-details'>Help desk</p></a>
    <a href="https://CodeJunction/blog"><p className='info-details'>Blog</p></a>
    <a href="https://CodeJunction/resources"><p className='info-details'>Resources</p></a>
    </div>
    <div className="connect">
        <div className="icons">
            <img className="sm_icons" src={Facbook} alt="facebook.png" />
            <img className="sm_icons" src={Instagram} alt="instagram.png"/>
            <img className="sm_icons" src={Twitter} alt="twitter.png"/>
            <img className="sm_icons" src={GitHub} alt="github.png"/>
            
        </div>
    </div>
</div>
  )
}

export default Footer
