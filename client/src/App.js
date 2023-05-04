import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/home';
import { LandingPage } from './components/LandingPage/landingPage';
import { Detail } from './components/Detail/detail';
import { Form } from './components/Form/form';
import { useHistory } from 'react-router-dom';
import { Nav } from './components/Nav/nav';


function App() {
  const { pathname } = useHistory().location
  return (
  <div className="App">

    { pathname === '/'? null : <Nav/> }
    <Switch>
      <Route exact path='/' component={ LandingPage }/>
      <Route exact path='/home' component={ Home } />
      <Route exact path='/detail/:id' component={ Detail }/>
      <Route exact path='/countries/create' component={ Form }/>
    </Switch>
    </div>
  );
}

export default App;