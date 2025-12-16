import React from "react";
import { Link } from "react-router-dom";
const MainBody = () => {
  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Home & Living",
    "Sports",
    "Books",
    "Toys",
    "Beauty",
  ];

  // Products with category
  const products = [
    { id: 1, title: "Smartphone", category: "Electronics", description: "Latest model with cinematic design." },
    { id: 2, title: "Sneakers", category: "Fashion", description: "Comfortable and stylish everyday wear." },
    { id: 3, title: "Sofa Set", category: "Home & Living", description: "Premium quality and modern design." },
    { id: 4, title: "Football", category: "Sports", description: "Durable and perfect for matches." },
    { id: 5, title: "Novel", category: "Books", description: "Engaging story with premium print." },
    { id: 6, title: "Action Figure", category: "Toys", description: "High-quality collectible toy." },
  ];

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
                className="px-5 py-2 rounded-full backdrop-blur-xl bg-white/40 border border-white/50 text-gray-800 font-semibold shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Products Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl shadow-xl p-6 transform transition-all hover:scale-[1.03] hover:shadow-2xl"
            >
              {/* Product Image Placeholder */}
              <div className="h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg mb-4 flex items-center justify-center text-gray-700 font-semibold ">
                {product.title}
              </div>

              {/* Product Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-700 mb-2">{product.description}</p>

              {/* Category */}
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium mb-4">
                {product.category}
              </span>

              {/* CTA */}
              <button className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:from-purple-700 hover:to-blue-600 transition-all">
                View Details
              </button>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="text-center p-4">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            Join the Orbit
          </h2>
          <p className="mt-2 text-gray-700">
            Sign up today and enjoy exclusive offers and updates.
          </p>
          <Link to='/register'><button className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 cursor-pointer">
            Create Account 
          </button></Link>
          
        </section>
      </div>
    </div>
  );
};

export default MainBody;