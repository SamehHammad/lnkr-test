"use server";
import { signIn, signOut } from "../auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export const authenticate = async (prevState, formData) => {
  const { mobile, password } = Object.fromEntries(formData);

  try {
    if (!mobile && !password) {
      return { error: "Invalid mobile number or password!" };
    }
    if (!mobile) {
      return { error: "Invalid mobile number!" };
    }
    if (!password) {
      return { error: "Invalid password!" };
    }
    await signIn("credentials", { mobile, password });
  } catch (error) {
    if (error.message === "Invalid email or password") {
      return "Invalid mobile number or password!";
    } else {
      return "Authentication failed!";
    }
  }
};

export const logOut = async () => {
  try {
    await signOut();
  } catch (error) {
    // if (isRedirectError(error)) {
    //   throw error;
    // }
  }
};
// export const authenticate = async (currentState, formData) => {
//   const { mobile, password } = Object.fromEntries(formData);
//   const apiUrl = "http://34.245.88.242/api/insurer/login";
//   const API_KEY =
//     "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3ODg2Mjc5LCJpYXQiOjE3MDUyOTQyNzksImp0aSI6ImJkZTU2OTVkNzc2ZjRhNzU5NWMwZTVlNmQ1YmJlNGIxIiwidXNlcl9pZCI6ImViZjlhYmNlLWU0ODEtNGVkNC1iZjdjLWVkODYzMWEzZTI0MCJ9.SBJyQidR7WF1JZpBsOxIGUEWmWnvGNDTq7uG_3q55qY";

//   try {
//     if (!mobile || !password) {
//       return { error: "Enter all details" };
//     }

//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Content-Length":"49",
//         "Host":"34.245.88.242",
//       },
//       body: JSON.stringify({
//         mobile: mobile,
//         password: password,
//       }),
//     });

//     if (!response.ok) {
//       let err = new Error("HTTP status code: " + response.status);
//       err.response = response;
//       err.status = response.status;
//       throw err;
//     }

//     const res = await response.json();
//     const user = res.data;

//     if (!user) {
//       throw new Error("Wrong credentials!");
//     }

//     console.log(user);
//     return user;
//   } catch (err) {
//     console.error(err);
//     throw new Error("Failed to login!");
//   }
// };
