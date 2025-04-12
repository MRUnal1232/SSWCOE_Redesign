import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Monitor, Brain, Database, Radio, Zap, Atom } from "lucide-react"

interface DepartmentCardProps {
  name: string
  icon: string
  description: string
  link: string
}

export default function DepartmentCard({ name, icon, description, link }: DepartmentCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Monitor":
        return <Monitor className="h-10 w-10 text-navy-blue" />
      case "Brain":
        return <Brain className="h-10 w-10 text-navy-blue" />
      case "Database":
        return <Database className="h-10 w-10 text-navy-blue" />
      case "Radio":
        return <Radio className="h-10 w-10 text-navy-blue" />
      case "Zap":
        return <Zap className="h-10 w-10 text-navy-blue" />
      case "Atom":
        return <Atom className="h-10 w-10 text-navy-blue" />
      default:
        return <Monitor className="h-10 w-10 text-navy-blue" />
    }
  }

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 fade-in hover-lift">
      <CardHeader className="pb-2 flex flex-row items-center space-x-4">
        <div className="bg-gray-100 p-3 rounded-full">{getIcon()}</div>
        <CardTitle className="text-xl text-navy-blue">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={link} className="text-navy-blue font-medium text-sm flex items-center hover:underline">
          Learn More <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
