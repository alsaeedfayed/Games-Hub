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
import { FileUploadDemo } from "../FileUpload";
import { IUserSignUp } from "@/app/models/user.model";
import { USER_CREATE } from "@/app/constants";
import { useRouter } from "next/navigation";
import Error from "next/error";
import Toast from "../defaults/Toast";
//schema for form validation using ZOD
const loginSchema = z
  .object({
    emailId: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    firstName: z
      .string()
      .min(5, { message: "Name must be at least 5 characters" }),
    lastName: z
      .string()
      .min(5, { message: "Name must be at least 5 characters" }),
    avatar: z.any().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
const Register = () => {
  //state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "loading",
    duration: 3000,
  });

  const showToast = (
    message: string,
    type: "success" | "error" | "loading",
    duration = 3000
  ) => {
    setToast({ show: true, message, type, duration });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };
  //routing
  const router = useRouter();
  //react hook form setup with zod resolver
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailId: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      avatar: null,
    },
  });
  //submit
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setLoading(true);
    setError(null);
    setToast({
      show: true,
      message: "Registering user...",
      type: "loading",
      duration: 0,
    });

    const payload: IUserSignUp = {
      firstName: data.firstName,
      lastName: data.lastName,
      emailId: data.emailId,
      password: data.password,
      mobileNo: "34324",
      middleName: "fsdf",
      altMobileNo: "324234",
      userAddress: {
        addressLine: "sdfdsf",
        city: "sdfds",
        state: "sdfdsf",
        pincode: "324234",
      },
      userSocialDetails: {
        facebookProfileUrl: "sdfdsf",
        instagramHandle: "sdfdsf",
        linkdinProfileUrl: "sdfdsf",
        twitterHandle: "sdfdsf",
      },
    };
    console.log("Payload for user sign up:", payload);
    //perform registration logic here
    if (payload) {
      try {
        const res = await fetch(USER_CREATE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const result = await res.json();
        //success
        if (res.ok) {
          setToast({
            show: true,
            message: "Registration successful!",
            type: "success",
            duration: 1500,
          });
          setTimeout(() => {
            router.push("/login");
          }, 1500);
        } else {
          //error from server
          setError(result.message || "Registration failed");
          console.error("Registration failed:", result);
        }
      } catch (error: any) {
        setError(error.message || "An unexpected error occurred");
        setToast({
          show: true,
          message: error.message,
          type: "error",
          duration: 3000,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <MotionItem
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
      >
        <MaxWidthWrapper className="bg-black/80 rounded-2xl border-1 border-white/10 shadow-lg w-full md:w-xl flex flex-col items-center">
          <Logo />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 p-6 md:p-10 w-full"
            >
              <FileUploadDemo name="avatar" />
              <FormInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
              />
              <FormInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
              />
              <FormInput
                label="Email"
                name="emailId"
                type="email"
                placeholder="Enter your email"
              />
              <FormInput
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <FormInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
              />
              <Button
                className="cursor-pointer"
                variant={"destructive"}
                type="submit"
                disabled={loading}
              >
                Register
              </Button>
            </form>
            <div className="flex items-center gap-4">
              <p>already have an account? </p>{" "}
              <Link href={"/login"}>
                <Button
                  className="cursor-pointer text-rose-500 "
                  variant={"default"}
                  size={"sm"}
                >
                  Login Now
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

export default Register;
