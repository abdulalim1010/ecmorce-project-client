import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`) // ✅ CORRECT endpoint
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch product details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!product?._id) {
    return <div className="text-center py-20 text-red-500">Product not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 shadow-xl mt-10 rounded-lg">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-6">{product.title}</h1>
      <p className="mt-4 text-gray-700">{product.description}</p>
      <div className="mt-4 text-2xl font-bold text-green-700">${product.price}</div>
      <button className="btn btn-primary text-black mt-4">Buy Now</button>
    </div>
  );
};

export default ProductDetails;
