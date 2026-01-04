"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/app/store";

interface PublicRouteGuardProps {
  children: React.ReactNode;
}

export default function PublicRouteGuard({ children }: PublicRouteGuardProps) {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      // If user is logged in, redirect to home
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  // If not authenticated, show the page
  return <>{!isAuthenticated && children}</>;
}
