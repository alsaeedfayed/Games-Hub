"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import FormInput from "../FormInput";
//schema for form validation using ZOD
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
const Login = () => {
  //react hook form setup with zod resolver
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //submit
  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button variant={"destructive"} type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default Login;
