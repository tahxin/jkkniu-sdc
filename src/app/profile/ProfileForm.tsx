"use client"

import { useState } from "react"
import { updateProfile, handleSignOut } from "./actions"
import { Button } from "@/components/ui/button"

type UserProps = {
  id: string;
  email: string;
  name: string | null;
  bio: string | null;
  phone: string | null;
  department: string | null;
  role: string;
}

export default function ProfileForm({ user }: { user: UserProps }) {
  const [isPending, setIsPending] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    setMessage(null)
    const result = await updateProfile(formData)
    
    if (result.error) {
      setMessage({ type: 'error', text: result.error })
    } else {
      setMessage({ type: 'success', text: 'Profile updated successfully!' })
    }
    setIsPending(false)
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E8E8E8]">
      <form action={handleSubmit} className="space-y-6">
        {message && (
          <div className={`p-3 rounded-xl text-sm font-medium ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
            {message.text}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#0D0D0D]">Email Address</label>
            <input 
              type="email" 
              defaultValue={user.email} 
              disabled
              className="w-full h-11 px-4 rounded-xl border border-input bg-gray-50 text-sm opacity-70 cursor-not-allowed"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#0D0D0D]">Full Name</label>
            <input 
              name="name" 
              type="text" 
              defaultValue={user.name || ""} 
              className="w-full h-11 px-4 rounded-xl border border-input bg-transparent text-sm focus:ring-1 focus:ring-primary outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#0D0D0D]">Phone Number</label>
            <input 
              name="phone" 
              type="tel" 
              defaultValue={user.phone || ""} 
              className="w-full h-11 px-4 rounded-xl border border-input bg-transparent text-sm focus:ring-1 focus:ring-primary outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#0D0D0D]">Department</label>
            <input 
              name="department" 
              type="text" 
              defaultValue={user.department || ""} 
              className="w-full h-11 px-4 rounded-xl border border-input bg-transparent text-sm focus:ring-1 focus:ring-primary outline-none"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-[#0D0D0D]">Bio</label>
            <textarea 
              name="bio" 
              rows={4}
              defaultValue={user.bio || ""} 
              className="w-full p-4 rounded-xl border border-input bg-transparent text-sm focus:ring-1 focus:ring-primary outline-none resize-none"
              placeholder="Tell us a bit about yourself..."
            />
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-[#E8E8E8]">
          <Button 
            type="button" 
            variant="ghost" 
            onClick={() => handleSignOut()}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            Sign out
          </Button>
          
          <Button type="submit" disabled={isPending} className="h-11 px-8 rounded-xl font-semibold">
            {isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  )
}
