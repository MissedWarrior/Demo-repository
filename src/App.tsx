import React, {Fragment} from 'react';

import './App.scss';

// todo: remove ts-ignore
// @ts-ignore
const App: React.FC = ({childRoute}) => {
  return (
    <Fragment>
      {childRoute}
    </Fragment>
  );
};

export default App;
