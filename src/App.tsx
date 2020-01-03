import React, {Fragment} from 'react';

import './App.scss';

// todo: remove ts-ignore
// @ts-ignore
const App: React.FC = ({childRoute}) => {
  import('@pages/Detail/Detail')
    .then(data => console.log(data.Detail({})));
  return (
    <Fragment>
      {childRoute}
    </Fragment>
  );
};

export default App;
