import React from 'react';
import './collection-item.styles.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({item, addItem }) => {
  const {imageUrl, name, price} = item;
  
  return (
    <div className="collection-item">
      <div style={{
        backgroundImage: `url(${imageUrl})`
      }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
    </div>
  )
}



const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)) 
})

export default connect(null, mapDispatchToProps)(CollectionItem);