import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { NewsItem } from './components/NewsItem'
import './App.css';
import {
  BrowserRouter as Router,


  Route,
  Routes,
  

}
  from "react-router-dom"
  
  


export default class App extends Component {
  pageSize=9;
  render() {
    return (
      <div>
        <Router>
      
          <Navbar />
          
  <Routes>
            <Route exact path="/"element={<News key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exact path="/Business"element={<News key="Business" pageSize={this.pageSize} country="in" category="Business" />}></Route>
            <Route exact path="/Entertainment"element={<News key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />}></Route>
            <Route exact path="/General"element={<News key="General" pageSize={this.pageSize} country="in" category="General" />}></Route>
            <Route exact path="/Science"element={<News key="Science" pageSize={this.pageSize} country="in" category="Science" />}></Route>
            <Route exact path="/Health"element={<News key="Health" pageSize={this.pageSize} country="in" category="Health" />}></Route>
            <Route exact path="/Technology"element={<News key="Technology" pageSize={this.pageSize} country="in" category="Technology" />}></Route>
            <Route exact path="/Sports"element={<News key="Sports" pageSize={this.pageSize} country="in" category="Sports" />}></Route>

          </Routes>

        
          <NewsItem />
          </Router>
       



      </div>
    )
  }
}