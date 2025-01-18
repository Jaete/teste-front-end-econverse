import React from 'react';

interface ProductProps {
    productName: string,
    descriptionShort?: string,
    photo?: string,
    price?: number,
}

const Product: React.FC<ProductProps> = ({ productName, descriptionShort, photo, price }) => {
    return (
        <div>
          <h2>{productName}</h2>
          {photo && <img src={photo} alt={productName} />}
          {descriptionShort && <p>{descriptionShort}</p>}
          {price && <p>{price}</p>}
        </div>
      );
};

export default Product;