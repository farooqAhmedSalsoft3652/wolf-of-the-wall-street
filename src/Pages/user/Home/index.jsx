import React from 'react'
import { UserLayout } from '../../../Components/user/Layout'
import { NewsFeed } from './Newsfeed'

export const Home = () => {
  return (
    <UserLayout noFooter>
      <NewsFeed />
    </UserLayout>
  )
}
