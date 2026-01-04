export interface IUserSignUp {
  userId?: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  mobileNo?: string;
  emailId: string;
  altMobileNo?: string;
  password: string;
  userAddress?: UserAddress;
  userSocialDetails?: UserSocialDetails;
}
export interface UserAddress {
  city: string;
  state: string;
  pincode: string;
  addressLine: string;
}
export interface UserSocialDetails {
  facebookProfileUrl: string;
  linkdinProfileUrl: string;
  instagramHandle: string;
  twitterHandle: string;
}

export interface IUserLogin {
  EmailId: string;
  Password: string;
}

export interface ILoginApiResponse {
  message: string;
  result: boolean;
  data: UserData;
}
export interface UserData {
  userId: number;
  emailId: string;
  token: string;
  refreshToken: string;
}
