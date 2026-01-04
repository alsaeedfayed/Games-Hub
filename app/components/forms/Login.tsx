"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import FormInput from "../FormInput";
import MotionItem from "../defaults/MotionItem";
import MaxWidthWrapper from "../defaults/MaxWidthWrapper";
import Logo from "../defaults/Logo";
import Link from "next/link";
import { USER_LOGIN } from "@/app/constants";
import { useRouter } from "next/navigation";
import { ILoginApiResponse } from "@/app/models/user.model";
import Toast from "../defaults/Toast";
//schema for form validation using ZOD
const loginSchema = z.object({
  EmailId: z.string().email({ message: "Invalid email address" }),
  Password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
const Login = () => {
  //state
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "loading",
    duration: 3000,
  });

  const hideToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };
  const router = useRouter();
  //react hook form setup with zod resolver
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      EmailId: "",
      Password: "",
    },
  });
  //submit
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setToast({
      show: true,
      message: "Login user...",
      type: "loading",
      duration: 0,
    });

    const hideToast = () => {
      setToast((prev) => ({ ...prev, show: false }));
    };
    if (data) {
      try {
        const res = await fetch(USER_LOGIN, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // REQUIRED for cookies

          body: JSON.stringify({
            EmailId: data.EmailId,
            Password: data.Password,
          }),
        });
        const result: ILoginApiResponse = await res.json();
        //success
        if (res.ok) {
          setToast({
            show: true,
            message: "Login successful!",
            type: "success",
            duration: 1500,
          });
          //console.log("Login successful:", result);
          //credentials: "include", // REQUIRED for cookies
          localStorage.setItem("user", JSON.stringify(result.data));
          setTimeout(() => {
            router.push("/");
          }, 1500);
        } else {
          //error from server
          console.error("Registration failed:", result);
        }
      } catch (error: any) {
        setToast({
          show: true,
          message: error.message,
          type: "error",
          duration: 3000,
        });
      } finally {
        //setLoading(false);
      }
    }
  };

  return (
    <>
      <MotionItem
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
      >
        <MaxWidthWrapper className="bg-black/40 rounded-2xl border-1 border-white/10 shadow-lg w-full md:w-xl flex flex-col items-center">
          <Logo />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 p-6 md:p-10 w-full"
            >
              <FormInput
                label="Email"
                name="EmailId"
                type="email"
                placeholder="Enter your email"
              />
              <FormInput
                label="Password"
                name="Password"
                type="password"
                placeholder="Enter your password"
              />
              <Button
                className="cursor-pointer"
                variant={"destructive"}
                type="submit"
              >
                Login
              </Button>
            </form>
            <div className="flex items-center gap-4">
              <p>Do not have an account? </p>{" "}
              <Link href={"/signup"}>
                <Button
                  className="cursor-pointer text-rose-500 "
                  variant={"default"}
                  size={"sm"}
                >
                  Register Now
                </Button>
              </Link>
            </div>
          </Form>
        </MaxWidthWrapper>
      </MotionItem>
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
      />
    </>
  );
};

export default Login;
