'use client';
import { SnackbarProvider } from 'notistack';
import React, { useEffect } from 'react'
import Navbar from './(main)/navbar';


const Template = ({children}) => {
useEffect(() =>{
  require('bootstrap/dist/js/bootstrap.bundle.min.js');
}, []);


  return (
    <div>
     <SnackbarProvider >
      {children}
      </SnackbarProvider>
    </div>

  )
}

export default Template;