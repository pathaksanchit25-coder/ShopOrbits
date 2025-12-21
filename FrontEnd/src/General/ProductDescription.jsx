import React, { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDescription = () => {
  const { id } = useParams(); // ✅ get product ID from URL
  const [product, setProduct] = useState(null);
  const [userRating, setUserRating] = useState(0); // NEW: user-selected rating
  const [hoverRating, setHoverRating] = useState(0); // NEW: hover effect
  const [reviewText, setReviewText] = useState(""); // NEW: review input

  // Fetch product info from backend
  const productInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/admin/product/description/${id}`
      );
      setProduct(response.data.product); // ✅ store product in state
    } catch (err) {
      console.error("Error fetching product:", err.message);
    }
  };

  useEffect(() => {
    productInfo();
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted review:", { rating: userRating, review: reviewText });
    // Later: send to backend API
    setReviewText("");
    setUserRating(0);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col md:flex-row">
      {/* Left: Product Image */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-white/20 backdrop-blur-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-4/5 h-auto object-cover rounded-xl shadow-xl"
        />
      </div>

      {/* Right: Product Info */}
      <div className="md:w-1/2 w-full px-8 py-12 flex flex-col justify-center gap-6">
        {/* Title + Rating */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            {product.name}
          </h1>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-white/50 text-gray-900 shadow">
            <span className="text-yellow-500 text-xl">⭐</span>
            <span className="font-semibold">{product.rating}</span>
          </span>
        </div>

        {/* ✅ Price */}
        <p className="text-green-700 text-2xl font-bold">₹{product.price}</p>

        {/* Description */}
        <p className="text-gray-800 text-lg leading-relaxed">
          {product.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow hover:from-blue-600 hover:to-purple-700 transition-all">
            Add to Cart
          </button>
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold shadow hover:from-green-600 hover:to-teal-700 transition-all">
            Buy Now
          </button>
          <button className="px-4 py-2 rounded-full bg-white/40 border border-white/50 text-gray-900 shadow flex items-center gap-2">
            <FiHeart /> Add to Wishlist
          </button>
        </div>

        {/* ⭐ Star Rating + Review Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Give a Rating
            </h3>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setUserRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className={`cursor-pointer text-2xl ${
                    (hoverRating || userRating) >= star
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            {userRating > 0 && (
              <p className="mt-2 text-gray-700">
                You rated this product: {userRating} star
                {userRating > 1 ? "s" : ""}
              </p>
            )}
          </div>

          {/* Review Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Add a review"
              className="flex-1 px-4 py-2 rounded-lg bg-white/40 border border-white/50 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold shadow hover:from-purple-600 hover:to-blue-700 transition-all"
            >
              Add
            </button>
          </div>
        </form>

        {/* Reviews Section */}
        <div className="mt-6 p-6 rounded-xl bg-white/30 border border-white/50 shadow-inner">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Reviews</h3>
          <p className="text-gray-700 italic">Reviews are shown here...</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;