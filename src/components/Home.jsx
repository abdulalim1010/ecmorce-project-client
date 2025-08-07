import React from 'react';
import Hero from './Hero';
import Products from './product/Products';

const Home = () => {
  return (
    <div>
      <h1 className='text-red-500'>home </h1>
      <Hero />
      <Products/>
    </div>
  );
};

export default Home;