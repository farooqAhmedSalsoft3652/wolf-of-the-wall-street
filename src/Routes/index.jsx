import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../Pages/user/Home';
import UserLogin from '../Pages/user/Auth/Login';
import { MyProfile } from '../Pages/user/Profile';
import { UserEditProfile } from '../Pages/user/Profile/edit-profile';
import { UserChangePassword } from '../Pages/user/Profile/change-password';
import { Error404 } from '../Pages/Error404';
import CreateProfile from '../Pages/user/Auth/create-profile';

import SubscriptionPlans from '../Pages/user/SubscriptionPlans';
import SubscriptionDetails from '../Pages/user/SubscriptionPlans/details';
import SubscriptionCheckout from '../Pages/user/SubscriptionPlans/details/checkout';
import WolfSchoolArticles from '../Pages/user/WolfSchoolArticles';
import WolfSchoolArticlesDetails from '../Pages/user/WolfSchoolArticles/details';
export default function UserRoutes () {
  
  return (
    <BrowserRouter basename='/wolf-of-the-wall-street'>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/edit-profile" element={<UserEditProfile />} />
        <Route path="/change-password" element={<UserChangePassword />} />

        <Route path="/subscription-plans" element={<SubscriptionPlans />} />
        <Route path="/subscription-plans/details/:id" element={<SubscriptionDetails />} />
        <Route path="/subscription-plans/details/subscription-checkout/:id" element={<SubscriptionCheckout />} />

        <Route path="/wolf-school-articles" element={<WolfSchoolArticles />} />
        <Route path="/wolf-school-articles/details/:id" element={<WolfSchoolArticlesDetails />} />

        
      </Routes>
  </BrowserRouter>
  )
}

