import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './routes/Route'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

     <AuthProvider>

     <QueryClientProvider client={queryClient}>

     <Toaster/>
     <RouterProvider router={Route}>
     </RouterProvider>

     </QueryClientProvider>

     </AuthProvider>


  </React.StrictMode>,
)
