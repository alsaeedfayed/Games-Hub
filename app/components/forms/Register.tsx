"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import FormInput from "../FormInput";
import MotionItem from "../defaults/MotionItem";
import MaxWidthWrapper from "../defaults/MaxWidthWrapper";
import Logo from "../defaults/Logo";
import Link from "next/link";
import { FileUploadDemo } from "../FileUpload";
//schema for form validation using ZOD
const loginSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    name: z.string().min(5, { message: "Name must be at least 5 characters" }),
    avatar: z.any().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
const Register = () => {
  //react hook form setup with zod resolver
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      avatar: null,
    },
  });
  //submit
  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
  };

  return (
    <MotionItem animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }}>
      <MaxWidthWrapper className="bg-black/80 rounded-2xl border-1 border-white/10 shadow-lg w-full md:w-xl flex flex-col items-center">
        <Logo />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-6 md:p-10 w-full"
          >
            <FileUploadDemo name="avatar" />
            <FormInput
              label="Name"
              name="name"
              type="text"
              placeholder="Enter your name"
              description="ex : alsaeedfayed"
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              description="ex : alsaeedfayed@gmail.com"
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              description="Your password must be strong"
            />
            <FormInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              description="Your password must Match"
            />
            <Button
              className="cursor-pointer"
              variant={"destructive"}
              type="submit"
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
  );
};

export default Register;
