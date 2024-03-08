import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../../assets'

export const UserFooter = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-inner">
                    <div className="row">
                        <div className="col-12 py-lg-2 text-center">
                            <Link to={'/'}>
                                <img src={images.footerLogo} alt="" className="img-fluid footer-logo" />
                            </Link>

                            <ul class="footer-links">
                                <li><Link to={''}>About Us</Link></li>
                                <li><Link to={''}>Contact Us</Link></li>
                                <li><Link to={''}>Terms And Conditions</Link></li>
                                <li><Link to={''}>Privacy Policy</Link></li>
                                <li><Link to={''}>Gifts</Link></li>
                            </ul>

                            <ul class="social-icons">
                                <li><Link to={''}><img src={images.youtubeIcon} /></Link></li>
                                <li><Link to={''}><img src={images.tiktokIcon} /></Link></li>
                                <li><Link to={''}><img src={images.twitterIcon} /></Link></li>
                                <li><Link to={''}><img src={images.instaIcon} /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="py-3">
                            <p className='mb-0 text-center'>Copyright © 2024 The Wolf Of Wall Street. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
