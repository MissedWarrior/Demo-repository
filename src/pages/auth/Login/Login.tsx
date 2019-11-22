import React, {FormEvent} from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import s from './Login.module.scss';

const Login: React.FC<RouteComponentProps> = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({type: 'user/SET_USER'});

    props.history.push('/');
  };

  return (
    <div className={s.page_wrapper}>
      <form className={s.login_form} onSubmit={handleSubmit}>
        <div className={s.mr1}>
          <Link to={'/'} className={`${s.btn} ${s.login_link}`}>Back to main page</Link>
        </div>
        <div>
          <button type={'submit'} className={`${s.btn} ${s.login_btn}`}>Enter the site</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
