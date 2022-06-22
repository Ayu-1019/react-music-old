import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './router';
import store from './store';

import ZXYAppHeader from '@/components/app-header';
import ZXYAppFooter from '@/components/app-footer';
import ZXYAppPlayerBar from '@/pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ZXYAppHeader/>
          {renderRoutes(routes)}
        <ZXYAppFooter/>
        <ZXYAppPlayerBar/>
      </HashRouter>
    </Provider>
  )
});
