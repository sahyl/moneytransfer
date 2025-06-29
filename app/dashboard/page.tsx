"use client"
import Dashboard from "@/components/Dashboard";
import { Navbar } from "@/components/Navbar";
import { useSession } from "next-auth/react";
import React from "react";
import RequiredAuth from "../RequiredAuth";

const page = () => {
  const { data: session } = useSession();
  return (
    <>
    <RequiredAuth>
        <Navbar />
      <Dashboard session={session} />
      
    </RequiredAuth>
      
    </>
  );
};

export default page;
