import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './routes/home';
import About from './routes/about'
import Contact from './routes/contact'

function App() {
  return (
    <div className="App">
          <Router>
          <Header />
                <Switch>
                    <Route exact path="/" component={Home}>
                    </Route>
                    <Route path="/About">
                      <About />
                    </Route>
                    <Route path="/Contact">
                      <Contact />
                    </Route>
                </Switch>
            
        </Router>
      <Footer />
    </div>
  );
}

export default App;
