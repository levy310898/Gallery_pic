import React,{Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from 'components/NotFound';
import Header from 'components/Header';
import { Spin } from 'antd';
const Photo = React.lazy(() => import('./features/Photo/index'))
function App() {
  
  return (
    <div className="App">
      <Suspense fallback={<Spin size = 'large'/>}>
        <BrowserRouter>
          <Header />
          <Switch>
            {/* <Redirect exact from='/' to='' /> */}
            <Route path="/" component={ Photo} />
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
