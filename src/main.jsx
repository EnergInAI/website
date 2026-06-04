import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Product from './components/Product.jsx'
import Impact from './components/Impact.jsx'
import GetStarted from './components/Getstarted.jsx'
import Reviews from './components/Review.jsx'
import LegalPolicies from './components/LegalPolicies.jsx'
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import WhatsAppWidget from "./components/WhatsAppWidget";



const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/product",
        element:<Product/>,
      },
      {
        path:"/Impact",
        element:<Impact/>,
      },
      
      {
        path:"/get-started",
        element:<GetStarted/>,
      },
      {
        path:"/Reviews",
        element:<Reviews/>,
      },
      {
        path:"/legal-policies",
        element:<LegalPolicies/>
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/blogs/:slug",
        element:<BlogDetails/>
      },
      {
        path:"/WhatsAppWidget",
        element:<WhatsAppWidget/>
      }

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
