import { Users, GraduationCap, Building, Award } from "lucide-react"

export default function StatisticsFooter() {
  return (
    <section className="w-full py-12 bg-navy-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center fade-in">
            <Users className="h-12 w-12 mb-4" />
            <h3 className="text-4xl font-bold mb-2">5000+</h3>
            <p className="text-lg">Students Enrolled</p>
          </div>

          <div className="flex flex-col items-center fade-in-delay-1">
            <GraduationCap className="h-12 w-12 mb-4" />
            <h3 className="text-4xl font-bold mb-2">15000+</h3>
            <p className="text-lg">Alumni Network</p>
          </div>

          <div className="flex flex-col items-center fade-in-delay-2">
            <Building className="h-12 w-12 mb-4" />
            <h3 className="text-4xl font-bold mb-2">100+</h3>
            <p className="text-lg">Recruiting Companies</p>
          </div>

          <div className="flex flex-col items-center fade-in-delay-3">
            <Award className="h-12 w-12 mb-4" />
            <h3 className="text-4xl font-bold mb-2">95%</h3>
            <p className="text-lg">Placement Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
