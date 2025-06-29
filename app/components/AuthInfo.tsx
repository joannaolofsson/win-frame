// This component adds info to page about login state

import { createServerSupabase } from "@/lib/supabase/server";

import React from 'react'

export default async function AuthInfo() {
    const supabase = await createServerSupabase()
    const {
        data: {session},
    } = await supabase.auth.getSession()

    if(!session) return <p>Please log in</p>

  return  <p>Logged in as {session.user.email}</p>
}
