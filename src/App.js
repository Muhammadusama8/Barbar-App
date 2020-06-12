import React, { Component } from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Team from './components/Team/Team'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'





export class App extends Component {
  render() {
    return (
      <div>
 <Navbar/>

     <Home/>
     <Team/>

     <About/>
 <ContactUs/>
 <Footer/>
      </div>
    )
  }
}

export default App
