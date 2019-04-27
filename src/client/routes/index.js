import React from 'react';
import { object } from 'prop-types';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';

import Layout from '../components/Layout';
import GlobalHeader from '../components/GlobalHeader';
import { HomeView } from './Home';

const Routes = ({ history }) => {
  return (
    <Router history={history}>
      <Layout>
        <GlobalHeader />
        <Switch>
          <Route exact path="/" component={HomeView} />
        </Switch>
      </Layout>
    </Router>
  );
};

Routes.propTypes = {
  history: object.isRequired,
};

export default Routes;
