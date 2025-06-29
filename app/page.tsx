import React from "react";
import AuthInfo from "./components/AuthInfo";
import WinBoard from "./components/WinBoard";
//import { createServerSupabase } from "@/lib/supabase/server";

export default async function Home() {
  //const supabase = await createServerSupabase();
  //const { data: { session }, } = await supabase.auth.getSession();

  return (
    <main className="p-8">
      <div className="flex flex-col justify-center items-center gap-4 pt-12">
        <AuthInfo />
        <h1 className="text-6xl">Welcome to Small Wins</h1>
        <p className="text-2xl">Track your progress toward your future self.</p>
      </div>
      <div>
        <WinBoard />
      </div>
      
      {/*
      {session ? (
        <div>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <DashboardPage />
        </div>
      ) : (
       <AuthForm />
   
      {session && (
        <>
         Add things later
        </>
      )}*/}

    </main>
  )
}
