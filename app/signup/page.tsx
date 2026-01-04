import React from "react";
import Register from "../components/forms/Register";
import PublicRouteGuard from "../components/defaults/PublicRouteGuard";

const SignUp = () => {
  return (
    <main
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('bg2.jpg",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <PublicRouteGuard>
        <Register />
      </PublicRouteGuard>
    </main>
  );
};

export default SignUp;
