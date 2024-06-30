import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Homepage from '../Homepage/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;