import React, { Component } from 'react';

//COMPONENT
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Skills from './SkillsComponent';
import Projects from './ProjectsComponent';

class Main extends Component {

    render(){
        return (
            <div>
                <Header />
                <Home />
                <Skills />
                <Projects />
                <Footer />
            </div>
        );
    }
}

export default Main;
