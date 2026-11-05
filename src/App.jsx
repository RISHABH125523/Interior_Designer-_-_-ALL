import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Service'
import Contact from './Component/Contact'
import Portfolio from './Component/Portfolio'
import AllWork from './Component/Allwork'
import POP from './Component/Page/Pop'
import Painting from './Component/Page/Painting'
import NotFound from './Component/Page/NotFound'
import Electrical from './Component/Page/Electrical'
import Funiture from './Component/Page/Funiture'
import Plumbing from './Component/Page/Plumbing'
import False_Ceiling from './Component/Page/False_Ceiling'
import Glass_Aluminum from './Component/Page/Glass_Aluminum'
import Renovation from './Component/Page/Renovation'
import Wall_Design from './Component/Page/Wall_Design'
import Wall_Paper from './Component/Page/Wall_Paper'
import Footer from './Component/Footer'






const App = () => {
  return (
    <div>
      
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
         <Route path="/services" element={<Services/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/portfolio" element={<Portfolio/>}/>
         <Route path="/allwork" element={<AllWork/>}/>
         <Route path="/allwork/pop" element={<POP/>}/>
         <Route path="/allwork/painting" element={<Painting/>}/>
         <Route path="/allwork/electrical" element={<Electrical/>}/>
         <Route path="/allwork/furniture" element={<Funiture/>}/>
         <Route path="*" element={<NotFound/>}/>
         <Route path="/allwork/plumbing" element={<Plumbing/>}/>
          <Route path="/allwork/false-ceiling" element={<False_Ceiling/>}/>
          <Route path="/allwork/renovation" element={<Renovation/>}/>
          <Route path="/allwork/wall-design" element={<Wall_Design/>}/>
          <Route path="/allwork/glass-aluminum" element={<Glass_Aluminum/>}/>
          <Route path="/allwork/wallpaper" element={<Wall_Paper/>}/>

      </Routes>
      
      <Footer/>
       
      </BrowserRouter>
     
      
    </div>
  )
}

export default App
