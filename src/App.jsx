import { useState } from 'react'
import { motion } from 'framer-motion'
import { Routes, Route, Link } from 'react-router-dom'
import Blog from './Blog'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Home() {
  const [count, setCount] = useState(0)
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col">
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
          <Link to="/blog" className="text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300">
            Blog
          </Link>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <motion.h1 
            className="text-6xl font-bold text-white mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            Yo Main this is sick dude
          </motion.h1>
          
          <motion.div 
            className="flex justify-center space-x-8 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          >
            <motion.a 
              href="https://vite.dev" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
            </motion.a>
            <motion.a 
              href="https://react.dev" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img src={reactLogo} className="h-16 w-16 animate-spin-slow" alt="React logo" />
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            <motion.button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-white text-black font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300 mb-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              count is {count}
            </motion.button>
            <p className="text-gray-300 text-lg">
              Edit <code className="bg-gray-800 px-2 py-1 rounded text-green-400">src/App.jsx</code> and save to test HMR
            </p>
          </motion.div>
          
          <motion.p 
            className="text-gray-400 mt-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
          >
            Click on the Vite and React logos to learn more
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default App
