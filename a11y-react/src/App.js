import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
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
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/About">
                      <About />
                    </Route>
                    <Route path="/Contact">
                      <Contact />
                    </Route>
                </Switch>
            
        </Router>

     
      <Content />
      <Footer />
    </div>
  );
}

export default App;
