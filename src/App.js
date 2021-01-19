import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/about" component={About} /> 
        <Route exact path="/services" component={Services} /> 
        <Route exact path="/contact" component={Contact} /> 
        <Redirect to="/" />
      </Switch>
      
    </div>
  );
}

export default App;
