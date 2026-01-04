"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/index";
import { loginUser } from "@/app/store/user/auth/authThunks";
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
  //using store
  const dispatch = useDispatch<AppDispatch>();
  const { error, isAuthenticated, loading } = useSelector(
    (state: RootState) => state.auth
  );
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

    if (data) {
      const res = await dispatch(loginUser(data));
      if (loginUser.fulfilled.match(res)) {
        setToast({
          show: true,
          message: "Login successfull!",
          type: "success",
          duration: 1500,
        });
      } else {
        setToast({
          show: true,
          message: (res.payload as string) || "Login failed",
          type: "error",
          duration: 3000,
        });
      }
    }
  };

  //effecct to auth state change
  useEffect(() => {
    if (!isAuthenticated) return;

    const timeout = setTimeout(() => {
      router.push("/");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isAuthenticated, router]);

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
