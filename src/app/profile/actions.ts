"use server"

import { auth, signOut } from "@/auth"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function updateProfile(formData: FormData) {
  const session = await auth()
  if (!session?.user?.id) {
    return { error: "Not authenticated" }
  }

  const name = formData.get("name") as string
  const bio = formData.get("bio") as string
  const phone = formData.get("phone") as string
  const department = formData.get("department") as string

  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { name, bio, phone, department }
    })
    
    revalidatePath("/profile")
    return { success: true }
  } catch (error) {
    console.error(error)
    return { error: "Failed to update profile" }
  }
}

export async function handleSignOut() {
  await signOut({ redirectTo: "/" })
}
