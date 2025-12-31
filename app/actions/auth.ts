"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export async function signInWithGoogle() {
  const supabase = await createClient()
  const requestHeaders = await headers()
  const origin = requestHeaders.get("origin")

  if (!origin) {
    return redirect("/auth/login?error=OriginMissing")
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    return redirect(`/auth/login?error=OAuthSigninFailed&message=${encodeURIComponent(error.message)}`)
  }

  if (data.url) {
    return redirect(data.url)
  }

  return redirect("/auth/login?error=OAuthConfigurationError")
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  return redirect("/")
}
