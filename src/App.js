import React from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router";
import HomePage from "./containers/HomePage/HomePage";
import InformPage from "./containers/InformPage/InformPage";

const App = () => (
    <Layout>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/shows/:id' exact component={InformPage}/>
      </Switch>
    </Layout>
);

export default App;