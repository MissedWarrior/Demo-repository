import React from 'react';
import {Link} from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div>Nothing really here. May be you need something else? Would <Link to={'/'}>main page</Link> be fine for you?</div>
  );
};

export default NotFound;
