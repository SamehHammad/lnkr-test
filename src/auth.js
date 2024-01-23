import NextAuth from "next-auth";
import { authConfig } from "./authconfig";
import Credentials from "next-auth/providers/credentials";
import { admin } from "./lib/data";

const login = async (credentials) => {
  try {
  const user = admin;
  if (!user) {
    throw new Error("Wrong credentials!");
  } else if (
    credentials.mobile !== user.mobile &&
    credentials.password !== user.password
  ) {
    throw new Error("Wrong credentials!");
  } else {
    return user;
  }
} catch (err) {
  console.log(err);
  throw new Error("Failed to login!");
}
 
};
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.mobile = user.mobile;
        token.insurance = user.approval_emp.insurance;
        token.profile = user.approval_emp.profile;
        token.medical_network = user.approval_emp.medical_network;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.mobile = token.mobile;
        session.user.insurance = token.insurance;
        session.user.profile = token.profile;
        session.user.medical_network = token.medical_network;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
});


