import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { signOut } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default async function AccountPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect("/auth/login")
  }

  const user = data.user

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8">My Account</h1>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Profile</h2>

            <div className="flex items-center gap-4 mb-6">
              {user.user_metadata?.avatar_url && (
                <img
                  src={user.user_metadata.avatar_url || "/placeholder.svg"}
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
              )}
              <div>
                <p className="font-semibold text-gray-900">{user.user_metadata?.full_name || "User"}</p>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>

            <form action={signOut}>
              <Button
                type="submit"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
              >
                Sign Out
              </Button>
            </form>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order History</h2>
            <p className="text-gray-600">No orders yet. Start shopping to see your order history here.</p>
            <Button asChild className="mt-4 bg-orange-500 hover:bg-orange-600 text-white">
              <a href="/shop">Browse Products</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
