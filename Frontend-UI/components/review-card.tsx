import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"

interface ReviewCardProps {
  name: string
  position: string
  content: string
  rating: number
}

export default function ReviewCard({ name, position, content, rating }: ReviewCardProps) {
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-gold text-gold" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 fill-gold text-gold" />)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-5 w-5 text-gray-300" />)
    }

    return stars
  }

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 fade-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl text-navy-blue">{name}</CardTitle>
            <CardDescription className="text-sm text-gray-600">{position}</CardDescription>
          </div>
          <div className="flex">{renderStars()}</div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 italic">"{content}"</p>
      </CardContent>
    </Card>
  )
}
