import React from 'react';

import { Header, Footer } from 'components';
import './index.less';

const App = () => (
  <div className="app">
    <div className="app__header">
      <Header />
    </div>
    <div className="app__footer">
      <Footer />
    </div>
  </div>
);

export default App;
