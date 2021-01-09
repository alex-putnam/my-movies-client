import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import { Watchlist } from './Watchlist/Watchlist';
import { Watched } from './Watched/Watched';
import { Search } from './Search/Search';
import { GlobalProvider } from './Context/GlobalState';
import './App.css';
import './lib/font-awesome/css/all.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/watchlist'>
            <Watchlist />
          </Route>
          <Route path='/watched'>
            <Watched />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
