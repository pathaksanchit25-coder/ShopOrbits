import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AddProduct = () => {
    const {id} = useParams();
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        description: "",
        category: "",
        customCategory: "",
        price: "",
    });

    const categories = [
        "Electronics",
        "Fashion",
        "Home & Living",
        "Sports",
        "Books",
        "Toys",
        "Beauty",
        "Others", // ✅ Added "Others"
    ];

    const addProductInfo = async (productData) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/admin/product/add",
                productData
            );
            console.log("Response:", response.data);
        } catch (err) {
            console.error("Error adding product:", err.message);
        }
    };

    const adminInfo = async () => {
        const response = await axios.get(`http://localhost:3000/api/info/admin/${id}`);
        console.log(response.data.username);
    };

    useEffect(()=>{
        adminInfo();
    },[id])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ If "Others" is selected, use customCategory instead
        const finalCategory =
            formData.category === "Others" ? formData.customCategory : formData.category;

        const productData = {
            name: formData.name,
            image: formData.image,
            description: formData.description,
            category: finalCategory,
            price: formData.price,
        };

        console.log("Product submitted:", productData);

        // Call backend API
        addProductInfo(productData);

        // ✅ Reset form back to initial state
        setFormData({
            name: "",
            image: "",
            description: "",
            category: "",
            customCategory: "",
            price: "",
        });
    };

    return (
        <div className="pt-10 min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center">
            <div className="w-full max-w-lg backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6 text-center">
                    Add New Product
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Product Name */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter product name"
                            className="w-full px-4 py-2 rounded-lg bg-white/40 border border-white/50 text-gray-900 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

                    {/* Product Image */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Enter image URL"
                            className="w-full px-4 py-2 rounded-lg bg-white/40 border border-white/50 text-gray-900 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter product description"
                            rows="3"
                            className="resize-none w-full px-4 py-2 rounded-lg bg-white/40 border border-white/50 text-gray-900 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        ></textarea>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white/40 border border-white/50 text-gray-900 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        >
                            <option value="">Select category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>

                        {/* ✅ Show custom category input if "Others" is selected */}
                        {formData.category === "Others" && (
                            <input
                                type="text"
                                name="customCategory"
                                value={formData.customCategory}
                                onChange={handleChange}
                                placeholder="Enter custom category"
                                className="mt-3 w-full px-4 py-2 rounded-lg bg-white/40 border border-white/50 text-gray-900 focus:ring-2 focus:ring-blue-400 outline-none"
                                required
                            />
                        )}
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Price (₹)</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter price in rupees"
                            className="w-full px-4 py-2 rounded-lg bg-white/40 border border-white/50 text-gray-900 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:from-purple-700 hover:to-blue-600 transition-all"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;