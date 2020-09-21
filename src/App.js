import React, { Component } from 'react'
import { BrowserRouter as Router,  Route } from 'react-router-dom';


import {Container} from 'react-bootstrap';


import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Switch from 'react-bootstrap/esm/Switch';

import SkillSetPage from './pages/SkillSetPage'
import ContactPage from './pages/ContactPage'


export default class App extends Component {
  state = {
      home: {title: "Portfoloi",},
      about: {title: "SkillSet", },
      contact: { title: "About Me", }
    }
  
  render() {
    const {home,about,contact} = this.state
    return (
      <>
        <Router>
          <Container className="" fluid={true}>
            <NavigationBar/>
            <Switch>
            <Route path="/" exact render={()=><HomePage title={home.title} />}></Route>
            <Route path="/about"  render={()=><SkillSetPage title={about.title}/>}></Route>
            <Route path="/contact"  render={()=><ContactPage title={contact.title}/>}></Route>
            </Switch>

            <Footer />
          </Container>
        </Router>
      </>
    )
  }
}
