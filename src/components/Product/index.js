import React from 'react';
import styles from './Product.scss';
import dataStore from '../../data/dataStore.json';
import { connect } from 'react-redux';
import cartActions from 'redux/actions/cartActions';

const formatPrice = (price) => {
  if (!price) { return null; }
  const priceDecimalValues = Math.ceil(price * 100).toString().slice(-2);
  const priceFloorValue = Math.floor(price);
  return `${priceFloorValue},${priceDecimalValues} zł`;
}

const Product = (product) => {

  const { _id, name, price, imgSrc, addProduct } = product

  let addScaleDown = false;
  if (name==='CBSe Limon 0,5kg' || name==='CBSe Naranja 0,5kg'
    || name==='Cruz De Malta Naranja 0,5kg' || name==='Cruz De Malta Limon 0,5kg'
    || name==='Cruz De Malta Hierbas 0,5kg' || name==='Kozieradka - nasiona całe 100g'
    || name==='Herbatka Detox 100g' || name==='Herbata Rozgrzewająca 100g'
    || name==='Figa Suszony Owoc 200g' || name==='Bez Czarny Kwiat 50g'
    || name.includes('Bombilla') || name==='Szczoteczka do bombilli'
    || name==='Termometr analogowy')
  {
    addScaleDown = true;
  }

  return (
    <div className='product'>
      <img
        src={imgSrc}
        alt="yerba-mate-shop"
        className={addScaleDown?'product__img-scale-down':''}
      />
      <p className='product__desc'>{name}</p>
      <div className='product__btn-div'>
        <p className='product__btn-div__price'>{formatPrice(price)}</p>
        <button type="button" onClick={e => addProduct(product)}>
          Dodaj do<br />koszyka
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = { addProduct: cartActions.add };

export default connect(null, mapDispatchToProps)(Product);
