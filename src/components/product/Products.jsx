// src/components/product/Products.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let temp = [...products];
    if (search) {
      temp = temp.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    }
    if (maxPrice) {
      temp = temp.filter((p) => parseFloat(p.price) <= parseFloat(maxPrice));
    }
    setFiltered(temp);
  }, [search, maxPrice, products]);

  return (
    <div className="px-4 py-8 max-w-7xl bg-gray-100 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

      <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          className="input input-bordered w-full md:max-w-xs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="input input-bordered w-full md:max-w-xs"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="animate-pulse bg-base-200 rounded-lg p-4 shadow-lg h-64" />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-gray-600">{product.description.slice(0, 60)}...</p>
                <div className="mt-2 text-lg font-bold text-green-600">${product.price}</div>
                <Link
  to={`/product/${product._id}`}
  className="mt-4 inline-block bg-blue-600 text-white hover:bg-indigo-700 transition-colors duration-300 font-semibold px-4 py-2 rounded-2xl shadow-md"
>
  Buy Now
</Link>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
