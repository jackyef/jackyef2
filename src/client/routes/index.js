import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '../components/Layout';
import HomeNewView from './HomeNew/View';
import HomeView from './Home';

const basename = document.domain === 'jackyef.github.io' ? '/jackyef' : '/';

const Routes = () => {
  return (
    <Router basename={basename}>
      <Layout>
        <Switch>
          <Route exact path="/new" component={HomeNewView} />
          <Route exact path="/" component={HomeView} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
