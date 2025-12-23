import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserNavbar from "./UserNavbar";

const WishListeItems = () => {
    // Sample data for demo
    const sampleItems = [
        { _id: "1", image: "https://images.unsplash.com/photo-1761839257864-c6ccab7238de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Wireless Headphones" },
        { _id: "2", image: "https://via.placeholder.com/150", title: "Smart Watch" },
        { _id: "3", image: "https://via.placeholder.com/150", title: "Gaming Laptop" },
        { _id: "4", image: "https://via.placeholder.com/150", title: "Sneakers" },
    ];

    // Handle remove with toast
    const handleRemove = (title) => {
        toast.error(`${title} removed from wishlist!`, {
            position: "top-center",
            autoClose: 3000,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
            {/* Fixed Navbar */}
            <div className=" z-50">
                <UserNavbar />
            </div>

            {/* Page Content */}
            <div className="pt-10 px-6 max-w-5xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-12 text-center">
                    Your Wishlist
                </h2>

                {sampleItems.length === 0 ? (
                    <p className="text-center text-gray-700">Your wishlist is empty.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {sampleItems.map((item) => (
                            <div
                                key={item._id}
                                className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl"
                            >
                                {/* Image */}
                                <div className="h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg mb-6 flex items-center justify-center shadow-inner">
                                    <img src={item.image} alt={item.title} className="h-full object-contain drop-shadow-md" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{item.title}</h3>

                                {/* Buttons */}
                                <div className="flex gap-4">
                                    {/* Remove Button */}
                                    <button
                                        onClick={() => handleRemove(item.title)}
                                        className="flex-1 px-5 py-2 rounded-full flex items-center justify-center gap-2 
                      bg-gradient-to-r from-rose-500 to-red-600 text-white font-semibold shadow-md 
                      hover:from-rose-600 hover:to-red-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        Remove
                                    </button>

                                    {/* Details Button */}
                                    <Link to={`/product/${item._id}`} className="flex-1">
                                        <button
                                            className="w-full px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 
                        text-white font-semibold shadow-md hover:from-purple-700 hover:to-blue-600 
                        hover:scale-105 hover:shadow-lg transition-all duration-300"
                                        >
                                            Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Toast container */}
                <ToastContainer />
            </div>
        </div>
    );
};

export default WishListeItems;