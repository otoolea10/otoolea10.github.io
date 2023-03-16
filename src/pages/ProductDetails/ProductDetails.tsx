import React from "react";
import itemCardsData from "../../components/ItemCards/ItemCardsData.json";
import { useLocation } from "react-router-dom";
import ProductDetailsStyles from "./ProductDetailsStyles";

const ProductDetails = () => {
  const { pathname } = useLocation();
  const itemNumber = Number(pathname.split("/").reverse()[0]) - 1;
  return (
    <ProductDetailsStyles>
      <div className="product-container">
        <div className="product-img">
          <img src={itemCardsData.itemCards[itemNumber].singleViewImage} />
        </div>
        <div className="product-title">
          <h1>{itemCardsData.itemCards[itemNumber].itemTitle}</h1>
        </div>
        <div className="product-description">
          <p>{itemCardsData.itemCards[itemNumber].itemDescription}</p>
          <ul>
            <li>{itemCardsData.itemCards[itemNumber].itemPrice}</li>
            <li>{itemCardsData.itemCards[itemNumber].itemStorage}</li>
            <li>{itemCardsData.itemCards[itemNumber].itemData}</li>
          </ul>
        </div>
      </div>
      <div className="banner-image">
        <img src={itemCardsData.itemCards[itemNumber].itemBanner} />
      </div>
      <div className="tech-specs">
        <img src={itemCardsData.itemCards[itemNumber].itemTechSpecs} />
      </div>
    </ProductDetailsStyles>
  );
};
export default ProductDetails;
