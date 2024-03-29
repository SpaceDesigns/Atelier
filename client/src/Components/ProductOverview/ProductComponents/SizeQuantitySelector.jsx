import React, { useState, useEffect } from "react";
import axios from 'axios';
import { SizeQtyContainer, SizeQtyStyle, AddToCartFavoriteContainer, AddToCartButton, FavoriteIcon,  } from '../../Styles/ProductOverview/styleSelector.styled.js';
import { FaAngleDown, FaRegHeart, FaHeart } from 'react-icons/fa';

export default function SizeQuantitySelector({ currentStyleSkus, refreshState, setRefreshState }) {
  const [selectedSku, setSelectedSku] = useState(currentStyleSkus[0]);
  const outOfStockStatus = currentStyleSkus.length === 0 ? true : false;
  const currentStyleSkusArray = Object.entries(currentStyleSkus)
  const [favoriteStatus, setFavoriteStatus] = useState(false);
  const [selectedQty, setSelectedQty] = useState('-');
  const [sizeSeletedStatus, setSizeSelectedStatus] = useState(false);
  const [sizeSelected, setSetSelected] = useState('');
  const [qtySeletedStatus, setQtySelectedStatus] = useState(false);

  const [message, setMessage] = useState('none');


  useEffect(() => {
    const currentStyleSkusArray = Object.entries(currentStyleSkus);
    setSizeSelectedStatus(false);
    setSizeSelectedStatus(false);
  }, [currentStyleSkus])

  const sizeOptions = () => {
    if (outOfStockStatus) {
      return <option value="out of stock">OUT OF STOCK</option>
    } else {
      var skuArray = [];
      skuArray.push(<option key="" value="">SELECT SIZE</option>);
      skuArray.push(currentStyleSkusArray.map((sku, index) => {
        return <option key={sku[0] + index} value={sku[0]}>{sku[1].size}</option>;
      }))
      return skuArray;
    }
  }

  const quantityOptions = () => {
    let qtyPlaceholder = sizeSeletedStatus ? 'QTY' : '-----'
    let qtyArray = []
    const maxQuantity = 15;
    const quantityAvailable = currentStyleSkus[selectedSku]?.quantity;
    const quantityDropdownNum = Math.min(quantityAvailable, maxQuantity);
    qtyArray.push((<option key="" value="">{qtyPlaceholder}</option>))
    for (var i = 1; i < quantityDropdownNum + 1; i++) {
      qtyArray.push(<option key={i} value={i}>{i}</option>)
    }
    return qtyArray;
  }

  const handleSizeSelect = (event) => {
    // when a size is selected, record the size to selected size
    setSelectedSku(event.target.value);
    setSizeSelectedStatus(true);
  }

  const handleQtySelect = (event) => {
    // when a size is selected, record the size to selected size
    if (sizeSeletedStatus) {
      setSelectedQty(event.target.value);
      setQtySelectedStatus(true);
    } else {
      alert("Please select a size.")
    }
  }

  const handleFavorite = () => {
    setFavoriteStatus(!favoriteStatus);
  }

  const handleAddToBag = () => {
    if (sizeSeletedStatus && outOfStockStatus === false && qtySeletedStatus) {
      for (let i = 0; i < selectedQty; i++) {
        axios({
          method: 'post',
          url:  '/cart',
        })
          .then((response) => {
            setRefreshState(!refreshState);
          })
          .catch((error) => {
            console.log('Error adding item to cart', error);
          });
      }
      alert("Item(s) added to cart.");
    } else if (!sizeSeletedStatus){
      alert("Please select a size.")
    } else if (!qtySeletedStatus) {
      alert("Please select the quantity.")
    }
  }

  return (
    <>
      <SizeQtyContainer >
        <SizeQtyStyle name="size" className="size-select" onChange={handleSizeSelect}>
          {sizeOptions()}
        </SizeQtyStyle>
        <SizeQtyStyle onChange={handleQtySelect} name="quantity" id="quantity-select" style={{marginLeft: '5px'}}>
          {quantityOptions()}
        </SizeQtyStyle>
      </SizeQtyContainer>

      <AddToCartFavoriteContainer>
        <AddToCartButton onClick={handleAddToBag} >ADD TO BAG</AddToCartButton>

        <FavoriteIcon>
          <div onClick={handleFavorite}>{
            favoriteStatus ? <FaHeart /> : <FaRegHeart />}
          </div>
        </FavoriteIcon>
      </AddToCartFavoriteContainer>
    </>
  )
}