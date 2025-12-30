import React from "react";
import Login from "../components/forms/Login";

const LogIn = () => {
  return (
    <main
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('background.jpg",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Login />
    </main>
  );
};

export default LogIn;
