import React from "react";
import Register from "../components/forms/Register";

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
      <Register />
    </main>
  );
};

export default SignUp;
