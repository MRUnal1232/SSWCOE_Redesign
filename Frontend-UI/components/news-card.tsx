import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

interface NewsCardProps {
  title: string
  date: string
  excerpt: string
  link: string
}

export default function NewsCard({ title, date, excerpt, link }: NewsCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 fade-in hover-lift">
      <CardHeader className="pb-2">
        <CardDescription className="text-sm text-gray-500">{date}</CardDescription>
        <CardTitle className="text-xl text-navy-blue">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link href={link} className="text-navy-blue font-medium text-sm flex items-center hover:underline">
          Read More <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
