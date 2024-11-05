import React from "react";
import ProductCard from "./ProductCard";
import './FeaturedProducts.css';

const featuredProducts = [
  { id: 1, name: 'Wireless Earbuds', price: '$99.99', image: '/assets/product-images/earbuds.jpg' },
  { id: 2, name: 'Smart Watch', price: '$199.99', image: '/assets/product-images/smartwatch.jpg' },
  { id: 3, name: 'Laptop', price: '$899.99', image: '/assets/product-images/laptop.jpg'  },
  { id: 4, name: 'Gaming Console', price: '$499.99', image: '/assets/product-images/console.jpg' },
  { id: 5, name: 'mobile', price: '$649.99', image: '/assets/product-images/mobile.jpg' },
  { id: 6, name: 'keyboard', price: '$49.99', image: '/assets/product-images/keyboard.jpg' },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
