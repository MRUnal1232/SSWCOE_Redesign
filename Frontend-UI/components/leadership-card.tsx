import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

interface LeadershipCardProps {
  name: string
  position: string
  image: string
  description: string
  link: string
}

export default function LeadershipCard({ name, position, image, description, link }: LeadershipCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 fade-in hover-scale">
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover rounded-t-lg" />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-navy-blue">{name}</CardTitle>
        <CardDescription className="text-sm font-medium text-gray-600">{position}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={link} className="text-navy-blue font-medium text-sm flex items-center hover:underline">
          Read Full Message <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
