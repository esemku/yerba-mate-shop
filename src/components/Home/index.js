import React from 'react';
import styles from './Home.scss';
//import {listData} from '../../data/dataStore';
import PropTypes from 'prop-types';
import LoginHeader from '../LoginHeader';
import Container from '../Container';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';


class Home extends React.Component {
  render() {
    return (
      <div className='component'>
        <LoginHeader />
        <div className="homeContainer">
          <Container />
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }
}


export default Home;
