import React, { useState } from "react";

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk status login

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn); // Mengubah status login
  };

  return (
    <button className="bg-white" onClick={toggleLoginStatus}>
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
};

export default AuthButton;
