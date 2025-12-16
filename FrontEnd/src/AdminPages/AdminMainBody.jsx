import React from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiUsers, FiShoppingCart, FiSettings, FiBox, FiBarChart2 } from "react-icons/fi";

const AdminMainBody = () => {
  const actions = [
    {
      name: "Add Product",
      description: "Quickly add new products to your store.",
      icon: <FiPlus size={32} />,
      link: "/admin/add-product",
      gradient: "from-blue-200 to-blue-400",
    },
    {
      name: "Manage Products",
      description: "View, edit, and remove existing products.",
      icon: <FiBox size={32} />,
      link: "/admin/manage-products",
      gradient: "from-blue-200 to-blue-400",
    },
    {
      name: "Manage Users",
      description: "View and manage registered users.",
      icon: <FiUsers size={32} />,
      link: "/admin/users",
      gradient: "from-blue-200 to-blue-400",
    },
    {
      name: "View Orders",
      description: "Track and manage customer orders.",
      icon: <FiShoppingCart size={32} />,
      link: "/admin/orders",
      gradient: "from-blue-200 to-blue-400",
    },
    {
      name: "Settings",
      description: "Configure admin preferences and system settings.",
      icon: <FiSettings size={32} />,
      link: "/admin/settings",
      gradient: "from-blue-200 to-blue-400",
    },
    {
      name: "Analytics Dashboard",
      description: "View sales, revenue, and performance insights.",
      icon: <FiBarChart2 size={32} />,
      link: "/admin/analytics",
      gradient: "from-blue-200 to-blue-400",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {actions.map((action) => (
          <Link
            key={action.name}
            to={action.link}
            className={`flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-r ${action.gradient} text-black shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all`}
          >
            <div className="mb-4">{action.icon}</div>
            <h3 className="text-xl font-bold">{action.name}</h3>
            <p className="text-sm text-gray-700 text-center mt-2">
              {action.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminMainBody;