import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import PrincipalScreen from './components/PrincipalScreen/PrincipalScreen'
import HeaderSidebar from './components/HeaderAndSidebar/Header&Sidebar.jsx';
import Cohortes from './components/ContentShow/Cohortes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={PrincipalScreen} />
        <Route exact path='/vistaprincipal' component={HeaderSidebar} />
        <Route exact path='/cohortes' component={Cohortes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
