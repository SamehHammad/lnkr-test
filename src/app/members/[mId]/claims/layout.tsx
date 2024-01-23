import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClaimsChildTabs from "@/components/tabs/ClaimsChildTabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Member Claims",
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
      <ClaimsChildTabs id={params.mId} />
      <hr className="bg-mainColor m-auto"></hr>
      <div className="flex justify-center items-center">{children}</div>
    </div>
  );
}
