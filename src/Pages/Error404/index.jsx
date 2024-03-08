import React from 'react'
import { UserLayout } from '../../Components/user/Layout'
import { InnerBanner } from '../../Components/user/InnerBanner'
import { images } from '../../assets'
import SiteButton from '../../Components/Button/button'
import { useNavigate } from 'react-router'

export const Error404 = () => {
    const navigate = useNavigate();
  return (
    <UserLayout headerClass="inner-page-header">
        <InnerBanner />
        <section className="error-404 py-sm-5 py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <img src={images.error404} alt="" className="img-fluid" />
                        <div className="mt-3">
                            <SiteButton onClick={()=>navigate('/')}>Back To Home</SiteButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </UserLayout>
  )
}
