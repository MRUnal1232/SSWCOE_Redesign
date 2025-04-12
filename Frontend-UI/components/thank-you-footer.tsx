import Link from "next/link"

export default function ThankYouFooter() {
  return (
    <div className="w-full py-4 bg-navy-blue text-white text-center text-sm">
      <div className="container mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} SSWCOE. All Rights Reserved. |
          <Link href="/privacy-policy" className="hover:underline ml-1">
            Privacy Policy
          </Link>{" "}
          |
          <Link href="/terms-of-use" className="hover:underline ml-1">
            Terms of Use
          </Link>
        </p>
      </div>
    </div>
  )
}
