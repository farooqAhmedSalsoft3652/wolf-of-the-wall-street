import React from 'react'
import { NewsFeedLeft } from './NewsFeedLeft'
import './index.css'
import { NewsFeedRight } from './NewsFeedRight'

export const NewsFeed = () => {
  return (
    <section className="news-feed">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 my-3">
                    <NewsFeedLeft className="mt-4" trial activeFeeds favorites testimonials />
                </div>
                <div className="col-lg-8 my-3">
                  <NewsFeedRight />
                </div>
            </div>
        </div>
    </section>
  )
}
