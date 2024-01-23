"use client";
import React from "react";
import {authenticate}  from "@/lib/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <div className="min-h-screen min-w-full flex flex-col ">
      <div className="relative py-3 xs:max-w-xl xs:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 xs:skew-y-0 xs:-rotate-6 xs:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg xs:rounded-3xl xs:p-20">
          <div className="max-w-lg mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login</h1>
            </div>
            <div className="divide-y divide-gray-200">
              {state && state.error}
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 xs:text-lg xs:leading-7">
                <form
                  className="relative flex flex-col gap-5"
                  action={formAction}                >
                  <div className="">
                    <input
                      autoComplete="off"
                      id="mobile"
                      name="mobile"
                      type="number"
                      className="peer py-1 rounded placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Enter mobile number"
                    />
                    <label
                      htmlFor="mobile"
                      className="absolute left-2 -top-3.5 text-gray-600 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs"
                    >
                      Mobile
                    </label>
                  </div>
                  <div className="relative ">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer py-1 rounded placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Enter Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-2 -top-3.5 text-gray-600 text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      className="bg-blue-500 text-white rounded-md px-2 py-1 w-full"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
