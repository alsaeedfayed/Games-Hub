import React from "react";
import Login from "../components/forms/Login";
import PublicRouteGuard from "../components/defaults/PublicRouteGuard";

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
      <PublicRouteGuard>
        <Login />
      </PublicRouteGuard>
    </main>
  );
};

export default LogIn;
