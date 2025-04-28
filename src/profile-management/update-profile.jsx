import React from "react";
import userImage from "../assets/logo.png";

const AccountPreferences = () => {
  return (
    <div className="mb-5 text-center text-2xl font-bold text-blue-800">
      Account
    </div>
  );
};

const AccountSection = ({ account, editField }) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-5 bg-white shadow-md rounded-lg">
      {/* Header */}
      <h2 className="text-xl font-bold text-black mb-4">Personal Info</h2>

      {/* Profile Section */}
      <div className="gap-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={userImage}
              alt="Profile"
              className="w-12 h-12 rounded-full border border-gray-300"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{account.fullName}</h3>
              <p className="text-black text-sm">{account.role}</p>
            </div>
          </div>
          <button
            onClick={() => editField("name")}
            className="text-blue-800 hover:underline"
          >
            Edit
          </button>
        </div>
      </div>

      {/* Full Name */}
      <div className="py-3">
        <h2 className="text-lg font-bold text-black mb-2">Full Name</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-gray-500">
              account_circle
            </span>
            <p>{account.fullName}</p>
          </div>
          <button
            onClick={() => editField("name")}
            className="text-blue-800 hover:underline"
          >
            Edit
          </button>
        </div>
      </div>

      {/* Password */}
      <div className="py-3">
        <h2 className="text-lg font-bold text-black mb-2">Password</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-gray-500">
              lock
            </span>
            <p>*********</p>
          </div>
          <button
            onClick={() => editField("password")}
            className="text-blue-800 hover:underline"
          >
            Edit
          </button>
        </div>
      </div>

      {/* Email */}
      <div className="py-3">
        <h2 className="text-lg font-bold text-black mb-2">Email</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-gray-500">
              email
            </span>
            <p>{account.email}</p>
          </div>
          <button
            onClick={() => editField("email")}
            className="text-blue-800 hover:underline"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const account = {
    fullName: "John Doe",
    email: "john.doe@example.com",
    role: "Customer",
  };

  const editField = (field) => {
    console.log("Edit:", field);
    // Trigger overlay/modal or navigate to edit page
  };

  return (
    <div className="p-4 space-y-4">
      <AccountPreferences />
      <AccountSection account={account} editField={editField} />
    </div>
  );
};

export default ProfilePage;
