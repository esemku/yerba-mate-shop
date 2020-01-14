import React from 'react';
import styles from './Products.scss';
import Product from '../Product';
import Paging from '../Paging';


class ProductsWrapper extends React.Component {
  componentDidMount() {
    // fetch('http://localhost:5000/api/product')
    // .then(products => /*zrob cos z produktami*/);
  }

  render() {
    return (
      <div className='products-wrapper'>
        <Product />
        <Product />
        <Product />
        <Product />

        <Product />
        <Product />
        <Product />
        <Product />

        <Product />
        <Product />
        <Product />
        <Product />
        <Paging />
      </div>
    );
  }
}


export default ProductsWrapper;
