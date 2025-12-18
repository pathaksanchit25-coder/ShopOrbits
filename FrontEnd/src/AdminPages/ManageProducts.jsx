import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useParams } from "react-router-dom";
import axios from "axios";

const ManageProducts = () => {
  const { id } = useParams();

  // ✅ Products state from API
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getProductInfo = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/admin/product/info",
        { withCredentials: true }
      );

      // API returns { success: true, products: [...] }
      setProducts(response.data.products || []);
    } catch (err) {
      setError("Failed to fetch products");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <div className="pt-10 min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-8 text-center">
          Manage Products
        </h2>

        {/* Loading/Error */}
        {loading && <p className="text-center text-gray-600">Loading products...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {/* Products Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-[1.02] transition-transform"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-lg mb-4 shadow-md"
              />

              {/* Product Info */}
              <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-700 text-center mt-2">
                {product.description}
              </p>
              <p className="mt-2 text-gray-800 font-semibold">
                Category: <span className="text-blue-600">{product.category}</span>
              </p>
              <p className="mt-1 text-purple-700 font-bold">₹{product.price}</p>
              <p className="mt-1 text-yellow-600">⭐ {product.rating}</p>

              {/* Actions */}
              <div className="flex gap-4 mt-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow hover:from-blue-600 hover:to-purple-700 transition-all">
                  <FiEdit /> Edit
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold shadow hover:from-red-600 hover:to-pink-700 transition-all">
                  <FiTrash2 /> Delete
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ManageProducts;