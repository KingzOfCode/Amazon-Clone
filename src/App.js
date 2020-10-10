import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route }
from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { StateProviver, useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  /* useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])*/

  useEffect(() => {
// only runs once when app component loads, if left blank (similar to if else)
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'set_user',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'set_user',
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
            <Route path= '/login'>
               <Login />
            </Route>
              {/* ---------------<h1>Let's Build the Amazon Store :React:</h1>------------------ */}
              {/* Header Component - very top part of the website (amazon logo / seach bar)*/}
              {/* Home - directly under the header - (sliding pictures)*/}
            <Route path= '/checkout'>
              <Header />
              {/*<h1>I am a checkout, Hit the like button</h1> - checking code like 'console.log'*/}
              <Checkout />
            </Route>
            <Route path= '/'>
              <Header />
              <Home />
            </Route>
            <Route path= '/'>
              <Header />
              <Home />
            </Route>
            <Route path= '/'>
              <Header />
              <Home />
            </Route>                                            
            <Route path= '/'>
              <Header />
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
