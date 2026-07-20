import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"
import ProfileForm from "./ProfileForm"

export default async function ProfilePage() {
  const session = await auth()
  
  if (!session?.user?.email) {
    redirect("/login")
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  })

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] px-5 pt-28 pb-16">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
          <p className="text-muted-foreground mt-1">Manage your personal information and preferences.</p>
        </div>

        <ProfileForm user={user} />
      </div>
    </div>
  )
}
