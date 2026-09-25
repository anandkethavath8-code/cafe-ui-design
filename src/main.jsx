import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './componenets/navbar'
import Mainimg from './componenets/mainimg'
import {Middletext1,Middletext2} from './componenets/middletext'
import Qualitysection from './componenets/qualitysection'
import Menu from './componenets/menu'
import Footer from './componenets/footer'
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Mainimg/>
    <Middletext1/>
    <Qualitysection/>
    <Middletext2/>
    <Menu/>
    <Footer/>
  </StrictMode>,
)
