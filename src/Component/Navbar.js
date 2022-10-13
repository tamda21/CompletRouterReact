import React from 'react';
import {Link,withRouter} from 'react-router-dom';
let Navbar =(props)=>{
  /*setTimeout(function() {
    props.history.push('/contact')
  }, 4000);*/
  return (
    <nav className="red darken-3"> 
        <div class="nav-wrapper">
        <a href="#" class="brand-logo">TAMDA</a> 
        <ul id="nav-mobile" class="right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul> 
        </div>
    </nav> 

    )
}
export default /*withRouter(Navbar)*/ Navbar