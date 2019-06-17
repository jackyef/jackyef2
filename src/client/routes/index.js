import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '../components/Layout';
// import GlobalHeader from '../components/GlobalHeader';
import HomeNewView from './HomeNew/View';
import HomeView from './Home';

const basename = document.domain === 'jackyef.github.io' ? '/jackyef' : '/';

const Routes = () => {
  return (
    <Router basename={basename}>
      <Layout>
        {/* <GlobalHeader /> */}
        <Switch>
          <Route exact path="/" component={HomeNewView} />
          <Route exact path="/old" component={HomeView} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
