import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default async function ErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>
}) {
  const params = await searchParams

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 bg-white">
      <div className="w-full max-w-sm">
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Something went wrong</CardTitle>
          </CardHeader>
          <CardContent>
            {params?.error ? (
              <p className="text-sm text-gray-600 mb-4">Error: {params.error}</p>
            ) : (
              <p className="text-sm text-gray-600 mb-4">An unspecified error occurred.</p>
            )}
            <Link href="/auth/login" className="text-orange-500 hover:text-orange-600">
              Try again
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
