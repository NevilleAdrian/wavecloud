import React, { useState } from 'react';
import Login from './components/Login';
import Body from './components/Body';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';



function App() {
  const [auth, setAuth]= useState()

  const authentication = (auth) => {
    console.log("hello")
      setAuth(auth)
  }
  return (
   <>
   <Switch>
      {!auth ? <Route exact path='/' component={Body} /> : <Login auth={authentication}/>}
      <Route exact path='/about' component={About} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/contact' component={Contact} />
   </Switch>
   </>
  );
}

export default App;

