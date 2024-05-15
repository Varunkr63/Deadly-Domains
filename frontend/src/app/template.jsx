'use client';
import { SnackbarProvider } from 'notistack';
import React, { useEffect } from 'react'
import Navbar from './(main)/navbar';
import { AppProvider } from '@/context/AppContext';
import { PlanProvider } from '@/context/PlanContext';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

const Template = ({ children }) => {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  useEffect(() => {
    TimeAgo.addDefaultLocale(en);
  }, [])


  return (
    <SnackbarProvider>
      <AppProvider>
        <PlanProvider>
          {children}
        </PlanProvider>
      </AppProvider>
    </SnackbarProvider>
  )
}

export default Template;