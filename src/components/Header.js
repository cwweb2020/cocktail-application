import React from 'react'
import { Link } from 'react-router-dom'
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';

const Header = () => {
  return (
    <>
      <section className='header-total'>
          <div className="header-wrapper">
          <Link to="/">
             Home
          </Link>
          <img src="../img/logo.png" alt="" />

          <div className="header-redes">
            <TiSocialFacebook />
            <TiSocialTwitter />
            <TiSocialInstagram />

          </div>
             
          </div>
      </section>
    </>
  )
}

export default Header