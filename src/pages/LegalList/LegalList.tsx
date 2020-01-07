import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Link} from 'react-router5';

import {rootReducerType} from '@store/index';
import {LegalActions, REMOVE_LEGAL} from '@store/Legals/actionTypes';

import s from './LegalList.module.scss';

const LegalList: React.FC = () => {
  const {legals} = useSelector((state: rootReducerType) => state);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch<LegalActions>({type: REMOVE_LEGAL, id});
  };

  return (
    <div>
      <div className={s.mb1}>
        <Link routeName={'Index'} className={s.link}>Back to main page</Link>
      </div>
      <div className={s.mb1}>
        <Link routeName={'Detail'} routeParams={{id: 4}} className={s.link}>Go to missing page</Link>
      </div>
      {legals.length ?
        <table className={s.table}>
          <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Actions
            </th>
          </tr>
          </thead>
          <tbody>
          {legals.map((item, index) => {
            return (
              <tr key={index}>
                <td className={s.table_cell}>{item.name}</td>
                <td className={s.table_cell}>
                  <div className={s.cell_inner}>
                    <div className={s.mr1}>
                      <Link className={`${s.btn} ${s.table_btn} ${s.btn_link}`} routeName={'Legals.Detail'} routeParams={{id: item.id}}>More</Link>
                    </div>
                    <div>
                      <button className={`${s.btn} ${s.table_btn}`} onClick={() => handleRemove(item.id)}>Remove legal
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
        : 'No data'
      }
    </div>
  );
};

export default LegalList;
