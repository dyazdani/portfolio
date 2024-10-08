import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.tsx'
import './index.css'
import About from './client/components/About.tsx';
import Projects from './client/components/Projects.tsx';
import Contact from './client/components/Contact.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/projects",
    element: <Projects/>
  },
  {
    path: "/Contact",
    element: <Contact/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
