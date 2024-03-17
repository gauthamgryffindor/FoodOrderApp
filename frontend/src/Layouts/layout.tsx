import React from 'react'
import Header from '@/components/Header'
import LandingPage from '@/components/LandingPage';
import Footer from '@/components/Footer';
 type Props={
    children:React.ReactNode;
 };
const layout = ({ children }:Props) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <LandingPage/>
      <div className='container mx-auto flex-1  py-10'>{children}</div>
      <Footer/>
    </div>
  )
}



export default layout;