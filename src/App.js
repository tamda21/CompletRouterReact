import React,{ Component } from 'react';
import Navbar from './Component/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Post from './Component/Post';
class App extends Component {
  render(){
      return (
        <Router>
          <div className="App">
           <Navbar/>
           <Switch>
           <Route exact path ="/" component ={Home}></Route>
           <Route path ="/about" component ={About}></Route>
           <Route path ="/contact" component ={Contact}></Route>
           <Route path ="/:id_post" component ={Post}></Route>
           </Switch>
          </div>
          </Router>
        );
  }
}
export default App;
