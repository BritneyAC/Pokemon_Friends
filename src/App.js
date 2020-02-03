import React from 'react';
import './App.css';
import NavMenu from "./components/NavMenu"
import Pokemon from "./components/Pokemon";
import YourList from "./components/YourList";
import Messages from "./components/Messages";
import Menu from "./components/Menu";
import Friends from "./components/Friends";
import Account from "./components/Account";
import User from "./components/User";
import {Switch, Route} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <NavMenu />

      <Switch>
        <Route exact path="/">
          <YourList/>
        </Route>
        <Route path="/pokemon/:pokemonId">
          <Pokemon/>
        </Route>
        <Route path="/messages">
          <Messages/>
        </Route>
        <Route path="/menu">
          <Menu/>
        </Route>
        <Route path="/friends">
          <Friends/>
        </Route>
        <Route path="/account">
          <Account/>
        </Route>
        <Route path="/user/:username">
          <User/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
