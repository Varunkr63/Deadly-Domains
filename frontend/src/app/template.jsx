'use client';
import { SnackbarProvider } from 'notistack';
import React, { useEffect } from 'react'
import Navbar from './(main)/navbar';
import { AppProvider } from '@/context/AppContext';


const Template = ({ children }) => {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);


  return (
    <SnackbarProvider>
      <AppProvider>
        {children}
      </AppProvider>
    </SnackbarProvider>
  )
}

export default Template;