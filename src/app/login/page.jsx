import React from "react";
import LoginForm from "../../components/login/LoginForm";
import { auth } from "../../auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const Login = async () => {
  const session = await auth();
  if (session) {
    revalidatePath("/insurance");
    redirect("/insurance");
  }
  return (
    <div className="flex justify-center">
      <LoginForm />
    </div>
  );
};

export default Login;
