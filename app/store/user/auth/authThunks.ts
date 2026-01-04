import { USER_LOGIN } from "@/app/constants";
import { ILoginApiResponse, UserData } from "@/app/models/user.model";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: { EmailId: string; Password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(USER_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", //cookies when BE enables it
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "Login failed");
      }

      const result: ILoginApiResponse = await response.json();
      // Successfully logged in , save in localStorage and return payload
      const userData = result.data;
      localStorage.setItem("user", JSON.stringify(userData));
      document.cookie = "dummy_token=1; path=/"; // dummy token for now to use for middleware
      return userData;
    } catch (error: any) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);

export const loadUserFromStorage = createAsyncThunk(
  "auth/loadUserFromStorage",
  async () => {
    const stored = localStorage.getItem("user");
    if (!stored) return null;
    return JSON.parse(stored) as UserData;
  }
);
