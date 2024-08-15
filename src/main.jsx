import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Main from './Components/layout/Main.jsx'
import Authprovider from './authprovider/Authprovider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/Ruters.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router}>
    <Main></Main>
    </RouterProvider>
    </Authprovider>
     
    
    
  </StrictMode>,
)
