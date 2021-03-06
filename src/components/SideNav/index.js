import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import './SideNav.scss';
import dataStore from '../../data/dataStore.json';
import { uid } from 'react-uid';
import SideNavItem from './SideNavItem';


const SideNav = ({ history, location }) => {

  useEffect(() => {
      // console.log('location.pathname: ', location.pathname);
  });

  return(
    <aside className='sideNav'>
			<ul className='sideNav__mainlist-ul'>
        {dataStore.sideNav.mainList.map(item => {
          return (
            <SideNavItem
              key={uid(item)}
              item={item}
              currentPath={location.pathname}
              onPathChange={(path) => history.push(path)}
            />
          );
        })}
			</ul>
		</aside>
  );
}


export default withRouter(SideNav);
