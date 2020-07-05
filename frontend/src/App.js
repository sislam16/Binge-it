import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import Landing from './Components/Landing';
import Users from './Components/Users';
import Shows from './Components/Shows';
import AddShow from './Components/AddShow';
import About from './Components/About'

function App() {
  return (
    <div className="App">
      <div className='nav'>
        <div className='app-name'><Link to='/'><h1>TV Watchlist App</h1></Link></div>
        <ul>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/shows'>Shows</Link></li>
          <li><Link to='/shows/add'>Add Show</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>

      </div>


      <Switch>
        <Route exact path='/users'>
          <Users />
        </Route>

        <Route exact path='/shows'>
          <Shows />
        </Route>

        <Route exact path='/shows/add'>
          <AddShow />
        </Route>

        <Route exact path='/about'>
        <About/>
        </Route>

        <Route exact path='/'>
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
