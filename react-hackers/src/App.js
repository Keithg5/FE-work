// React Stuff
import React, {useEffect} from 'react';
import { Route, Switch} from "react-router-dom";
// Axios Stuff
import axiosWithAuth  from './utils/axiosWithAuth';
// Styling
import './App.css';
// Component Imports
import PrivateRoute from './components/PrivateRouter';
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import FormikLogin from "./components/Login";
import About from "./components/About";
import Landing from "./components/LandingPage/Landing";
import Account from "./components/Account";
import CommentList from "./components/CommentList"


function App() {

  // useEffect(() => {
  //   axiosWithAuth()
  //   .get('/app/login',)
  //   .then(res => console.log("%cGet Axios: ", "color:blue", res))
  //   .catch(err=> console.log( err ))
  // })

  return (
    <div className="App">
      <Header />
      {/* <FormikLogin /> */}

      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login"  component={FormikLogin}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/commentList"  component={CommentList} />
        <PrivateRoute exact path="/account"  component={Account}/>
        
      </Switch>
    </div>
  );
}

export default App;
