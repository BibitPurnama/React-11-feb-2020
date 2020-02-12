import React, {Component} from 'react';
import Content from './Component/Content'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Logo from './Component/logo'
import Inti from './Component/Inti'
import './Component/Navbar.css'

const App = () => {
    return (
        <div>
            <div className = 'navbar'>
        <Navbar />
        <Inti />
        </div>
        <Content />
        <Footer />
        <Logo />
        </div>
    )
}

export default App;

