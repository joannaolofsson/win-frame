import React from "react";
import WinBoard from "./components/WinBoard";
//import { createServerSupabase } from "@/lib/supabase/server";

export default async function Home() {
  //const supabase = await createServerSupabase();
  //const { data: { session }, } = await supabase.auth.getSession();

  return (
    <main className="pt-2">
      <div className="flex flex-col justify-center items-center gap-4 pb-4">
       {/* <AuthInfo />*/}
        <h1 className="text-2xl">Track your small wins to strengthen your frame</h1>
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
