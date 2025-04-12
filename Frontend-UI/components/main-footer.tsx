import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function MainFooter() {
  return (
    <footer className="w-full py-12 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="SSWCOE Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-xl text-navy-blue">SSWCOE</span>
            </div>
            <p className="mb-4">A premier engineering institution committed to academic excellence and innovation.</p>
            <div className="flex items-center space-x-4 mb-2">
              <Mail className="h-5 w-5 text-navy-blue" />
              <span>info@sswcoe.edu</span>
            </div>
            <div className="flex items-center space-x-4 mb-2">
              <Phone className="h-5 w-5 text-navy-blue" />
              <span>+91 1234567890</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-5 w-5 text-navy-blue" />
              <span>123 College Road, City, State - 123456</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-navy-blue">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about/about-sswcoe" className="hover:text-navy-blue hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admissions/enquiry" className="hover:text-navy-blue hover:underline">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/our-placements/tpo-activities" className="hover:text-navy-blue hover:underline">
                  Placements
                </Link>
              </li>
              <li>
                <Link href="/facilities/library" className="hover:text-navy-blue hover:underline">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-navy-blue hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-navy-blue hover:underline">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-navy-blue hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-navy-blue">Important Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/exam-section" className="hover:text-navy-blue hover:underline">
                  Exam Section
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-navy-blue hover:underline">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/e-learning/nptel" className="hover:text-navy-blue hover:underline">
                  NPTEL Courses
                </Link>
              </li>
              <li>
                <Link href="/e-learning/gate-tutor" className="hover:text-navy-blue hover:underline">
                  GATE Preparation
                </Link>
              </li>
              <li>
                <Link href="/facilities/nss" className="hover:text-navy-blue hover:underline">
                  NSS Activities
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="hover:text-navy-blue hover:underline">
                  Alumni Association
                </Link>
              </li>
              <li>
                <Link href="/high-level-committee" className="hover:text-navy-blue hover:underline">
                  High Level Committee
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-navy-blue">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <Link
                href="#"
                className="bg-navy-blue text-white p-2 rounded-full hover:bg-navy-blue/80 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-navy-blue text-white p-2 rounded-full hover:bg-navy-blue/80 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-navy-blue text-white p-2 rounded-full hover:bg-navy-blue/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-navy-blue text-white p-2 rounded-full hover:bg-navy-blue/80 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-navy-blue text-white p-2 rounded-full hover:bg-navy-blue/80 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
            <h3 className="text-lg font-bold mb-4 text-navy-blue">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-navy-blue"
              />
              <button
                type="submit"
                className="bg-navy-blue text-white px-4 py-2 rounded-r-md hover:bg-navy-blue/80 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
