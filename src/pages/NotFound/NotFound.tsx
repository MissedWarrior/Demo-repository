import React from 'react';
import {Link} from 'react-router5';

import s from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div>Nothing really here. May be you need something else? Would <Link className={s.link} routeName={'Index'}>main page</Link> be fine for you?</div>
  );
};

export default NotFound;
