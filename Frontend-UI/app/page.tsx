import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HeroSlider from "@/components/hero-slider"
import NewsCard from "@/components/news-card"
import DepartmentCard from "@/components/department-card"
import LeadershipCard from "@/components/leadership-card"
import ReviewCard from "@/components/review-card"
import StatisticsFooter from "@/components/statistics-footer"
import MainFooter from "@/components/main-footer"
import ThankYouFooter from "@/components/thank-you-footer"
import NewsTicker from "@/components/news-ticker"

export default function Home() {
  const newsItems = [
    {
      id: 1,
      title: "Admission Open for 2024-25 Academic Year",
      date: "April 10, 2025",
      excerpt:
        "Applications are now being accepted for the upcoming academic year. Early applicants will receive priority consideration.",
      link: "/admissions/first-year-btech",
    },
    {
      id: 2,
      title: "National Technical Symposium Announced",
      date: "April 5, 2025",
      excerpt:
        "Join us for our annual technical symposium featuring industry experts, workshops, and competitions with exciting prizes.",
      link: "/events/technical-symposium",
    },
    {
      id: 3,
      title: "Industry Partnership with Leading Tech Company",
      date: "March 28, 2025",
      excerpt:
        "We're proud to announce our new partnership with a leading technology company that will provide internship opportunities for students.",
      link: "/our-placements/mous",
    },
  ]

  const eventsItems = [
    {
      id: 1,
      title: "Campus Recruitment Drive",
      date: "April 20, 2025",
      excerpt: "Multiple companies will be visiting our campus for recruitment. Register now to participate.",
      link: "/our-placements/tpo-activities",
    },
    {
      id: 2,
      title: "Faculty Development Program",
      date: "April 15-17, 2025",
      excerpt: "Three-day workshop on advanced teaching methodologies and research opportunities.",
      link: "/events/faculty-development",
    },
    {
      id: 3,
      title: "Alumni Meet 2025",
      date: "May 5, 2025",
      excerpt: "Annual alumni gathering to network and share experiences with current students.",
      link: "/alumni",
    },
  ]

  const departments = [
    {
      id: 1,
      name: "Computer Science & Engineering",
      icon: "Monitor",
      description: "Cutting-edge curriculum covering software development, algorithms, and computer systems.",
      link: "/departments/computer-science-engineering",
    },
    {
      id: 2,
      name: "Computer Science & Engineering (AI & DS)",
      icon: "Brain",
      description: "Specialized program focusing on artificial intelligence and data science applications.",
      link: "/departments/computer-science-engineering-ai-ds",
    },
    {
      id: 3,
      name: "Information Technology",
      icon: "Database",
      description: "Comprehensive study of information systems, networking, and database management.",
      link: "/departments/information-technology",
    },
    {
      id: 4,
      name: "Electronics & Telecommunication",
      icon: "Radio",
      description: "Advanced training in electronic systems, signal processing, and communication networks.",
      link: "/departments/electronics-telecommunication",
    },
    {
      id: 5,
      name: "Electrical Engineering",
      icon: "Zap",
      description: "In-depth education in power systems, control systems, and electrical machines.",
      link: "/departments/electrical-engineering",
    },
    {
      id: 6,
      name: "General Science & Engineering",
      icon: "Atom",
      description: "Foundation courses in physics, chemistry, mathematics, and engineering principles.",
      link: "/departments/general-science-engineering",
    },
  ]

  const leadership = [
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      position: "President",
      image: "/placeholder.svg?height=300&width=300",
      description: "Leading our institution with over 25 years of experience in academic administration and research.",
      link: "/about/presidents-message",
    },
    {
      id: 2,
      name: "Dr. Priya Patel",
      position: "Principal",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Guiding our academic excellence with her expertise in engineering education and industry collaboration.",
      link: "/about/principals-message",
    },
    {
      id: 3,
      name: "Mr. Sunil Mehta",
      position: "Trustee",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Ensuring our institution's growth and development through strategic vision and community engagement.",
      link: "/about/about-trust",
    },
  ]

  const reviews = [
    {
      id: 1,
      name: "Ananya Singh",
      position: "CSE Graduate, 2023",
      content:
        "My experience at SSWCOE was transformative. The faculty's dedication and industry-relevant curriculum prepared me well for my career in software development.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rahul Desai",
      position: "IT Graduate, 2022",
      content:
        "The college provided excellent opportunities for technical growth and personality development. The placement cell was instrumental in helping me secure a great job.",
      rating: 4,
    },
    {
      id: 3,
      name: "Neha Patil",
      position: "E&TC Graduate, 2023",
      content:
        "The practical approach to learning and state-of-the-art laboratories gave me hands-on experience that employers value. I'm grateful for my time at SSWCOE.",
      rating: 5,
    },
  ]

  const tickerItems = [
    "Admissions open for 2024-25 academic year",
    "Campus recruitment drive scheduled for April 20, 2025",
    "National Technical Symposium registration now open",
    "New research lab inaugurated in collaboration with industry partner",
    "SSWCOE ranks among top 50 engineering colleges in the region",
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section with Auto Slider */}
      <HeroSlider />

      {/* News Ticker */}
      <div className="w-full bg-navy-blue text-white py-2">
        <NewsTicker items={tickerItems} />
      </div>

      {/* News and Events Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 fade-in">
          <Tabs defaultValue="news" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-navy-blue">Latest Updates</h2>
              <TabsList className="mt-4 md:mt-0">
                <TabsTrigger value="news">News</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="news" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newsItems.map((item) => (
                  <NewsCard key={item.id} title={item.title} date={item.date} excerpt={item.excerpt} link={item.link} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/news">
                  <Button
                    variant="outline"
                    className="border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white"
                  >
                    View All News <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {eventsItems.map((item) => (
                  <NewsCard key={item.id} title={item.title} date={item.date} excerpt={item.excerpt} link={item.link} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/events">
                  <Button
                    variant="outline"
                    className="border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white"
                  >
                    View All Events <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 fade-in-delay-1">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">Our Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of engineering programs designed to prepare you for a successful career
              in the rapidly evolving technological landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <DepartmentCard
                key={dept.id}
                name={dept.name}
                icon={dept.icon}
                description={dept.description}
                link={dept.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 fade-in-delay-2">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">Our Leadership</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries who guide our institution towards excellence in education, research, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <LeadershipCard
                key={leader.id}
                name={leader.name}
                position={leader.position}
                image={leader.image}
                description={leader.description}
                link={leader.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 fade-in-delay-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">Student Testimonials</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear what our alumni have to say about their experience at our institution.
            </p>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="md:basis-1/1 lg:basis-1/1">
                  <ReviewCard
                    name={review.name}
                    position={review.position}
                    content={review.content}
                    rating={review.rating}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Our Recruiters Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-blue mb-4">Our Recruiters</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We partner with leading companies to provide excellent career opportunities for our graduates.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={`/placeholder-logo.svg`}
                  alt={`Recruiter ${i}`}
                  width={120}
                  height={60}
                  className="object-contain h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Footer */}
      <StatisticsFooter />

      {/* Main Footer */}
      <MainFooter />

      {/* Thank You Footer */}
      <ThankYouFooter />
    </main>
  )
}
