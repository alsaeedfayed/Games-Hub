import { USER_LOGIN } from "@/app/constants";
import { ILoginApiResponse } from "@/app/models/user.model";
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
      // Successfully logged in , return payload
      return result.data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);
