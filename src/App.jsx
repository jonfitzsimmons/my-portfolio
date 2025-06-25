import { motion } from 'framer-motion'
import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Navigation */}
      <motion.nav 
        className="flex justify-center pt-8 pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex space-x-12">
          <Link to="/" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            Home
          </Link>
          <Link to="/case-studies" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            Case Studies
          </Link>
          <Link to="/ideas" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            Ideas
          </Link>
          <Link to="/about" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            About
          </Link>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div 
          className="text-center max-w-4xl px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <motion.h1 
            className="text-7xl font-bold text-white mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            Jon Fitzsimmons
          </motion.h1>
          
          <motion.p 
            className="text-2xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          >
            Product Designer crafting meaningful digital experiences
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            <Link 
              to="/case-studies"
              className="bg-white text-black font-semibold py-4 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              View Case Studies
            </Link>
            <Link 
              to="/ideas"
              className="border border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Explore Ideas
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

function CaseStudies() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <motion.nav 
        className="flex justify-center pt-8 pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex space-x-12">
          <Link to="/" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            Home
          </Link>
          <Link to="/case-studies" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            Case Studies
          </Link>
          <Link to="/ideas" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            Ideas
          </Link>
          <Link to="/about" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            About
          </Link>
        </div>
      </motion.nav>

      <div className="flex-1 max-w-6xl mx-auto px-8 py-16">
        <motion.h1 
          className="text-5xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Case Studies
        </motion.h1>
        
        <motion.div 
          className="text-gray-300 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <p className="mb-8">Coming soon. I'm currently working on detailed case studies that showcase my design process and problem-solving approach.</p>
          <p>Each case study will include research, ideation, prototyping, and final outcomes.</p>
        </motion.div>
      </div>
    </div>
  )
}

function Ideas() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <motion.nav 
        className="flex justify-center pt-8 pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex space-x-12">
          <Link to="/" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            Home
          </Link>
          <Link to="/case-studies" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            Case Studies
          </Link>
          <Link to="/ideas" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            Ideas
          </Link>
          <Link to="/about" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            About
          </Link>
        </div>
      </motion.nav>

      <div className="flex-1 max-w-6xl mx-auto px-8 py-16">
        <motion.h1 
          className="text-5xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ideas & Playground
        </motion.h1>
        
        <motion.div 
          className="text-gray-300 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <p className="mb-8">A space for experimental interactions, short articles, and design explorations.</p>
          <p>Here you'll find quick thoughts, prototypes, and creative experiments that don't fit into full case studies.</p>
        </motion.div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <motion.nav 
        className="flex justify-center pt-8 pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex space-x-12">
          <Link to="/" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            Home
          </Link>
          <Link to="/case-studies" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            Case Studies
          </Link>
          <Link to="/ideas" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            Ideas
          </Link>
          <Link to="/about" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            About
          </Link>
        </div>
      </motion.nav>

      <div className="flex-1 max-w-4xl mx-auto px-8 py-16">
        <motion.h1 
          className="text-5xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About
        </motion.h1>
        
        <motion.div 
          className="text-gray-300 text-xl leading-relaxed space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <p>
            I'm a product designer passionate about creating meaningful digital experiences that solve real problems.
          </p>
          <p>
            My approach combines user-centered design principles with technical understanding to deliver solutions that are both beautiful and functional.
          </p>
          <p>
            When I'm not designing, you can find me exploring new technologies, experimenting with creative coding, or sharing thoughts on design and innovation.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/ideas" element={<Ideas />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
