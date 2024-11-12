import { useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import { motion, AnimatePresence } from 'framer-motion'

const allProjects = [
  {
    id: 1,
    image: house1,
    clientName: 'Mr. Pradeep Raj',
    location: 'Tambaram',
    builtUp: '2400 sq. ft.',
  },
  {
    id: 2,
    image: house2,
    clientName: 'Mr. Vijayaraghavan',
    location: 'Mudichur',
    builtUp: '3500 sq. ft.',
  },
  {
    id: 3,
    image:house2,
    clientName: 'Mr. Babu',
    location: 'Sembakkam',
    builtUp: '2100 sq. ft.',
  },
  {
    id: 4,
    image:house2,
    clientName: 'Ms. Lakshmi',
    location: 'Adyar',
    builtUp: '3200 sq. ft.',
  },
  {
    id: 5,
    image:house2,
    clientName: 'Mr. Ramesh',
    location: 'T Nagar',
    builtUp: '2800 sq. ft.',
  },
  {
    id: 6,
    image:house2,
    clientName: 'Mrs. Priya',
    location: 'Velachery',
    builtUp: '2600 sq. ft.',
  },
  {
    id: 7,
    image:house2,
    clientName: 'Mr. Karthik',
    location: 'Porur',
    builtUp: '3100 sq. ft.',
  },
  {
    id: 8,
    image:house1,
    clientName: 'Ms. Divya',
    location: 'Anna Nagar',
    builtUp: '2900 sq. ft.',
  },
]

export default function ProjectExpo() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3)

  return (
    <section className="py-16 px-4 bg-background" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Latest Projects
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto" />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          layout
        >
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden group">
                      <img
                        src={project.image}
                        alt={`Project by ${project.clientName}`}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.clientName}</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Location: {project.location}</p>
                        <p>Built-Up: {project.builtUp}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6">
                  <Button
                      variant="outline"
                      className="w-full bg-gray-800 text-white relative overflow-hidden group"
                    >
                      <span className="relative z-10">VIEW PROJECT</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform translate-x-full group-hover:translate-x-0"></span>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-primary to-primary/60 text-primary-foreground transition-all duration-300 hover:from-primary/80 hover:to-primary"
          >
            {showAll ? 'VIEW LESS' : 'VIEW ALL'}
          </Button>
        </div>
      </div>
    </section>
  )
}
