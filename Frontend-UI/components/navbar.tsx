"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navItems = [
  {
    title: "Home",
    href: "/",
    submenu: [],
  },
  {
    title: "About",
    href: "#",
    submenu: [
      { title: "Principal's Message", href: "/about/principals-message" },
      { title: "President's Message", href: "/about/presidents-message" },
      { title: "About Trust", href: "/about/about-trust" },
      { title: "Our Vision & Mission", href: "/about/vision-mission" },
      { title: "About SSWCOE", href: "/about/about-sswcoe" },
      { title: "Information Brochure", href: "/about/information-brochure" },
    ],
  },
  {
    title: "Admissions",
    href: "#",
    submenu: [
      { title: "First Year B.Tech", href: "/admissions/first-year-btech" },
      { title: "Direct Second Year B.Tech", href: "/admissions/direct-second-year-btech" },
      { title: "Fees Structure 2023-24", href: "/admissions/fees-structure" },
      { title: "Admission Enquiry", href: "/admissions/enquiry" },
      { title: "Against CAP Admissions (F.Y.B.Tech)", href: "/admissions/against-cap-admissions" },
    ],
  },
  {
    title: "Departments",
    href: "#",
    submenu: [
      { title: "General Science & Engineering", href: "/departments/general-science-engineering" },
      { title: "Computer Science & Engineering (AI & DS)", href: "/departments/computer-science-engineering-ai-ds" },
      { title: "Computer Science & Engineering", href: "/departments/computer-science-engineering" },
      { title: "Information Technology", href: "/departments/information-technology" },
      { title: "Electronics & Telecommunication", href: "/departments/electronics-telecommunication" },
      { title: "Electrical Engineering", href: "/departments/electrical-engineering" },
      { title: "Training & Placement", href: "/departments/training-placement" },
      { title: "Training & Placement Rules & Regulations", href: "/departments/training-placement-rules" },
    ],
  },
  {
    title: "Our Placements",
    href: "#",
    submenu: [
      { title: "TPO Team", href: "/our-placements/tpo-team" },
      { title: "MOUs", href: "/our-placements/mous" },
      { title: "TPO Activities", href: "/our-placements/tpo-activities" },
    ],
  },
  {
    title: "Facilities",
    href: "#",
    submenu: [
      { title: "Library", href: "/facilities/library" },
      { title: "Hostel", href: "/facilities/hostel" },
      { title: "SC/ST/OBC Complaint Form", href: "/facilities/complaint-form" },
      { title: "NSS", href: "/facilities/nss" },
    ],
  },
  {
    title: "E-learning",
    href: "#",
    submenu: [
      { title: "NPTEL", href: "/e-learning/nptel" },
      { title: "Gate Tutor", href: "/e-learning/gate-tutor" },
      { title: "Spoken Tutor", href: "/e-learning/spoken-tutor" },
      { title: "Clubs", href: "/e-learning/clubs" },
    ],
  },
  {
    title: "Exam Section",
    href: "/exam-section",
    submenu: [],
  },
  {
    title: "High Level Committee",
    href: "/high-level-committee",
    submenu: [],
  },
  {
    title: "Career",
    href: "/career",
    submenu: [],
  },
  {
    title: "Contact",
    href: "/contact",
    submenu: [],
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 mt-10 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white bg-opacity-95 shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="SSWCOE Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className={cn("font-bold text-xl transition-colors", scrolled ? "text-navy-blue" : "text-white")}>
              SSWCOE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.submenu.length > 0 ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent hover:bg-navy-blue/10 transition-colors rounded-full",
                            scrolled ? "text-navy-blue" : "text-white",
                          )}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-lg shadow-lg">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent hover:bg-navy-blue/10 transition-colors rounded-full",
                            scrolled ? "text-navy-blue" : "text-white",
                          )}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="lg:hidden text-navy-blue" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.title} className="py-2">
                  {item.submenu.length > 0 ? (
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-navy-blue hover:bg-navy-blue/10">
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="mt-2 space-y-1 px-4">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.title}>
                            <Link
                              href={subItem.href}
                              className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className="block rounded-lg px-4 py-2 text-navy-blue hover:bg-navy-blue/10 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
