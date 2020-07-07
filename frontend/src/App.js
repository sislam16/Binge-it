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
      <div className='nav' style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '5%', borderBottom: 'solid 1px black' }}>
        <div className='app-name' style={{ marginLeft: '1%', }} >
          <Link to='/'>
            <h1 style={{ border: '1px solid black' }}>TV Watchlist App</h1>
          </Link>
        </div>
        <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', listStyleType: 'none', marginRight: '7%', marginTop: '5%' }}>
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
          <About />
        </Route>

        <Route exact path='/'>
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
