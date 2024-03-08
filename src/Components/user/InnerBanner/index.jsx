import React from 'react'
import './index.css'
import SiteInput from '../../Input/input'
import SiteButton from '../../Button/button'

export const InnerBanner = (props) => {
    return (
        <section className='inner-banner'>
            {props.withHeading ? (
                <div className="inner-banner-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className='inner-banner-heading mb-0'>{props.heading}</h1>
                                {props.noSearch ? '' : (
                                    <div className="search-barr mt-md-0 mt-3">
                                        <SiteInput placeholder="Search" className="rounded-pill" />
                                        <SiteButton className='user-btn p-sm' id="button-addon2">Search</SiteButton>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : ''}
        </section>
    )
}
