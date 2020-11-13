import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Header } from './components/Header/Header';
import { Alert } from './components/Alert/Alert';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Alert/>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about'component={About}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
