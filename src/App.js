import React from 'react'
import Layout from "./components/Layout/Layout";
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/Aboutus'
import Privacy from './pages/privacy'
import TermsCondition from './pages/termscondition'
import CarListing from './pages/CarListing'
import CarDetails from './pages/CarDetails'
import Blog from './pages/Blog'
import Contact from './pages/contact'
import BlogDetails from './pages/BlogDetails'
import NotFound from './pages/NotFound'
import EmiratesLayout  from './components/Layout/EmiratesLayout'
import Emirates from "./pages/Emirates";




function App() {
  // return <Layout />;  
  
  return <Routes>
    <Route element={<Layout />}>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/termscondition' element={<TermsCondition />} />
      <Route path='/flights' element={<CarListing />} />
      <Route path='/flights/:slug' element={<CarDetails />} />
      <Route path='/blogs' element={<Blog />} />
      <Route path='/blogs/:slug' element={<BlogDetails />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Route>

      {/* Emirates Routes */}

    <Route element={<EmiratesLayout />}>
      {/* <Route path='/emirates' element={<Contact />} />  */}
      <Route path='/emirates' element={<Emirates />} />
    </Route>

  </Routes>

}

export default App;
