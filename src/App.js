import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import About from './components/AboutComponent/AboutComponent';
import Announcement from './components/AnnouncementComponent/AnnouncementComponent';
import Sacrament from './components/SacramentComponent/SacramentComponent';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">St. Peters Church</NavbarBrand>
                </div>
                </Navbar>
                <Announcement />
                <About />
                <Sacrament />
            </div>
        );
    }
}

export default App;