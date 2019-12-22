import React from 'react';
import {Link} from 'react-router5';
import {useSelector} from 'react-redux';
import {rootReducerType} from '@store/index';

import s from '@pages/LegalList/LegalList.module.scss';
// import s from './Detail.module.scss'

const Detail: React.FC = (props) => {
  // todo: remove ts-ignore
  // @ts-ignore
  const id: number = +props.match.params.id;

  const legal = useSelector((state: rootReducerType) => state.legals.find(item => item.id === id));

  return (
    <div>
      {
        legal ?
          <React.Fragment>
            <div className={s.mb1}>
              <Link to={'/'} className={s.link}>Back to main page</Link>
            </div>
            <div className={s.mb1}>
              <Link to={'/legal-list'} className={s.link}>Back to legal list</Link>
            </div>
            <table className={s.table}>
              <thead>
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Description
                </th>
                <th>
                  Email
                </th>
                <th>
                  Phone number
                </th>
                <th>
                  Location
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className={s.table_cell}>{legal.name}</td>
                <td className={s.table_cell}>{legal.description}</td>
                <td className={s.table_cell}>{legal.email}</td>
                <td className={s.table_cell}>{legal.number}</td>
                <td className={s.table_cell}>{legal.location}</td>
              </tr>
              }
              </tbody>
            </table>
          </React.Fragment>
          : <div>Not found</div>
      }
    </div>
  );
};

export default Detail;
