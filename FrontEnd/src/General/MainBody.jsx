import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaHeart } from "react-icons/fa"; // React Icon for heart

const MainBody = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Home & Living",
    "Sports",
    "Books",
    "Toys",
    "Beauty",
    "Others",
  ];

  const getProductInfo = async (pageNum = 1, limit = 6) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/admin/product/allInfo?page=${pageNum}&limit=${limit}`
      );

      setProducts(response.data.products);
      setPage(response.data.page);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      console.error("Error fetching products:", err.message);
    }
  };

  useEffect(() => {
    getProductInfo(page);
  }, [page]);

  // Helper to render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center space-x-1 text-yellow-500 mb-2">
        {Array(fullStars)
          .fill("★")
          .map((star, i) => (
            <span key={`full-${i}`}>{star}</span>
          ))}
        {halfStar && <span>☆</span>}
        {Array(emptyStars)
          .fill("☆")
          .map((star, i) => (
            <span key={`empty-${i}`}>{star}</span>
          ))}
        <span className="ml-2 text-gray-700 text-sm">({rating})</span>
      </div>
    );
  };

  // Filter products by category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Toggle wishlist (local only)
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <div className="pt-10 min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Category Filter */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setPage(1); // reset to first page when category changes
                }}
                className={`px-5 py-2 rounded-full backdrop-blur-xl border font-semibold shadow-md transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-white/40 border-white/50 text-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl shadow-xl p-6 transform transition-all hover:scale-[1.03] hover:shadow-2xl"
            >
              <div className="h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full object-contain"
                />
              </div>

              {/* Title + Heart side by side */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {product.name}
                </h3>
                <button
                  onClick={() => toggleWishlist(product._id)}
                  className="ml-2"
                >
                  <FaHeart
                    className={`h-5 w-5 cursor-pointer ${
                      wishlist.includes(product._id)
                        ? "text-red-500"
                        : "text-gray-600"
                    }`}
                  />
                </button>
              </div>

              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-lg font-semibold text-green-700 mb-2">
                ₹{product.price}
              </p>

              {renderStars(product.rating)}

              <span className="inline-block px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium mb-4">
                {product.category}
              </span>

              <Link to={`/product/${product._id}`}>
                <button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:from-purple-700 hover:to-blue-600 transition-all">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </section>

        {/* Pagination Controls */}
        <section className="flex justify-center gap-4 mb-10">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </section>

        {/* Call to Action */}
        <section className="text-center p-4">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            Join the Orbit
          </h2>
          <p className="mt-2 text-gray-700">
            Sign up today and enjoy exclusive offers and updates.
          </p>
          <Link to="/register">
            <button className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 cursor-pointer">
              Create Account
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default MainBody;