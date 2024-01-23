import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProvidersMainTabs from "@/components/tabs/ProvidersMainTabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Provider Profile",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { mId: number };
}) {
  return (
      <div>
          
      <ProvidersMainTabs id={params.mId}  />
      <hr className="bg-mainColor w-[50%] m-auto"></hr>
      {children}
    </div>
  );
}
