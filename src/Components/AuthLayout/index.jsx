import React from 'react'
import './index.css';
import { images } from '../../assets';
// import ParticleEffect from '../ParticleEffect';
import Particles from '../ParticleEffect';
import { Link } from 'react-router-dom';

export const AuthLayout = (props) => {
    return (
        <section className={`login-bg pt-0 ${props.registerPage}`}>
            <Particles />
            {/* ParticleEffect is rendered inside the login-bg container */}
            <div className="login-inner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 text-center">
                            <Link><img src={images.loginLogo} alt="" className="img-fluid login-logo mb-4" /></Link>
                        </div>
                        <div className="col-lg-6 col-xl-7 pe-lg-5 mt-4">
                            <div className="login-left-card">
                                {/* Render children components/content here */}
                                {props.children}
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-5 mt-4 d-lg-block d-none text-end ps-lg-5">
                            <img src={images.loginVideo} autoPlay loop muted className="img-fluid h-100"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
