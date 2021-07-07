import React,{Suspense} from 'react';
import {BrowserRouter,Route,Switch,Redirect,Link} from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/index';

const Photo = React.lazy(() => import('./features/Photo/index'))
function App() {
  
  return (
    <div className="App">
      <Suspense fallback = {<div>Loading ...</div>}>
        <BrowserRouter>
          
          <Switch>
            <Redirect exact from='/' to='/photos' />
            <Route path="/photos" component={ Photo} />
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
