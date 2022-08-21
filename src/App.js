
// import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";


function App() {
//   const state = useState();
//   var currentTime = new Date().toLocaleTimeString();
  
//   const [count , setCount] = useState(currentTime);
  
//   const incNum = () => {
//     currentTime = new Date().toLocaleTimeString();
//     setCount(currentTime);
  
//  }; setInterval(incNum,1000);

  return (
    
      <header>
      <div>
        <Router>
      <Navbar/>
      
      <Switch>
          <Route exact path="/">
          <News key= ' general' pageSize= {8} category ='general'/>
          </Route>
       
      
      <Route exact path="/business">
          <News key= 'business ' pageSize= {8} category ='business'/>
          </Route>
                
                    <Route exact path="/entertainment">
          <News key= 'entertainment ' pageSize= {8} category ='entertainment'/>
          </Route>
		
		          <Route exact path="/general">
          <News key= ' general' pageSize= {8} category ='general'/>
          </Route>

		          <Route exact path="/health">
          <News key= 'health ' pageSize= {8} category ='health'/>
          </Route>

		          <Route exact path="/science">
          <News key= ' science' pageSize= {8} category ='science'/>
          </Route>

		          <Route exact path="/sports">
          <News key= 'sports ' pageSize= {8} category ='sports'/>
          </Route>

          <Route path="/">
          <News key = 'technology 'pageSize= {8} category ='technology'/>
          </Route>

          </Switch>
          </Router>
      </div>
      </header>
      
    
  );
}

export default App;
