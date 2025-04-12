"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function TopHeader() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <div className="bg-navy-blue text-white py-2 w-full">
      <div
        className={cn(
          "container mx-auto px-4 text-center transition-all duration-1000 transform",
          visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0",
        )}
      >
        <h1 className="text-lg md:text-xl font-bold">Shree Siddheshwar Women&apos;s College of Engineering, Solapur</h1>
      </div>
    </div>
  )
}
