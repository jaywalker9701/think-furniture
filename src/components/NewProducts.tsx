import React from 'react';
import './NewProducts.css';

const products = [
  {
    image: 'https://cdn11.bigcommerce.com/s-0193a/images/stencil/640w/products/3402/25220/enjoy-nhr-Blk-TBlack-00__22449.1775050739.jpg?c=2',
    brand: 'COMFORT',
    name: 'Comfort Workspace Enjoy Elite G2 - Task Chair (S)',
    price: '£409.50',
    salePrice: '£491.40'
  },
  {
    image: 'https://cdn11.bigcommerce.com/s-0193a/images/stencil/640w/products/3401/25244/file_91_37_18_91371843__61069.1775120947.jpg?c=2',
    brand: 'VITRA',
    name: 'Vitra Scout Meet - Meeting Table (R)',
    price: '£922.50',
    salePrice: '£1,107.00'
  },
  {
    image: 'https://cdn11.bigcommerce.com/s-0193a/images/stencil/640w/products/3400/25239/1__38204.1775120587.png?c=2',
    brand: 'VITRA',
    name: 'Vitra Scout Sprint - Table (R)',
    price: '£735.00',
    salePrice: '£882.00'
  },
  {
    image: 'https://cdn11.bigcommerce.com/s-0193a/images/stencil/640w/products/3399/25196/file_90_52_44_90524439__76538.1775119396.jpg?c=2',
    brand: 'VITRA',
    name: 'Vitra Reset - Modular Seating Solution (R)',
    price: '£955.00',
    salePrice: '£1,146.00'
  }
];

const NewProducts: React.FC = () => {
  return (
    <section className="new-products-section">
      <div className="container">
        <h2 className="section-title">New Products</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-img-box">
                <img src={product.image} alt={product.name} className="product-img" />
              </div>
              <div className="product-details">
                <span className="product-brand">{product.brand}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">
                  <span className="price-reg">{product.price}</span>
                  <span className="price-vat">{product.salePrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
