import React from 'react';
import { object } from 'prop-types';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '../components/Layout';
import HomeNewView from './HomeNew/View';
import HomeView from './Home';

const basename = document.domain === 'jackyef.github.io' ? '/jackyef' : '/';

const CustomRoutesWrapper = ({ history }) => {
  const showRevamp = history?.location?.search === '?show-revamped=true';

  if (showRevamp) {
    return (
      <Switch>
        <Route exact path="/" component={HomeNewView} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/new" component={HomeNewView} />
      <Route exact path="/" component={HomeView} />
    </Switch>
  );
};

CustomRoutesWrapper.propTypes = {
  history: object.isRequired,
};
const Routes = () => {
  return (
    <Router basename={basename}>
      <Layout>
        <Route component={CustomRoutesWrapper} />
      </Layout>
    </Router>
  );
};

export default Routes;
