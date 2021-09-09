import '../styles/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import DisplayBy from './DisplayBy';
import Home from './Home';
import Categories from './Categories';
import ChosenReview from './ChosenReview';
import ViewComments from "./ViewComments";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch />
        <div className="fixed-position">
          <Header />
          <Nav />
          <Route exact path="/api/reviews" />
          <DisplayBy />
        </div>

        <Route exact path="/reviews">
          <Home></Home>
        </Route>
        <Route exact path="/api/reviews/:review_id">
          <ChosenReview></ChosenReview>
        </Route>
        <Route exact path="/api/categories">
          <Categories></Categories>
        </Route>
        <Route exact path="/api/reviews/:review_id/comments">
          <ViewComments></ViewComments>
        </Route>
      </div>
    </BrowserRouter >
  );
}

export default App;
