import { FC } from "react";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import TopMenu from "@/components/TopMenu";

import {getServerSession} from 'next-auth/next';
import {authOptions} from './api/auth/[...nextauth]/authOptions';
import NextAuthProvider from '@/providers/NextAuthProvider';

import ReduxProvider from "@/redux/ReduxProvider";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booker",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nextAuthSession = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
        <NextAuthProvider session={nextAuthSession}>
          <TopMenu/>
          {children}
        </NextAuthProvider></ReduxProvider>
      </body>
    </html>
  )
}
