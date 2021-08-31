import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import DisplayBy from './DisplayBy';
import Home from './Home';
import Categories from './Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="fixed-position">
          <Header />
          <Nav />
          <DisplayBy />
        </div>
        <Switch />
          <Route exact path="/api/reviews">
            <Home></Home>
          </Route>
          <Route exact path="/api/categories">
            <Categories></Categories>
          </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
