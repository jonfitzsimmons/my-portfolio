import { useState } from 'react'
import { motion } from 'framer-motion'
import { Routes, Route, Link } from 'react-router-dom'
import Blog from './Blog'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Home() {
  const [count, setCount] = useState(0)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <nav className="mb-8 flex justify-center space-x-8">
          <Link to="/" className="text-white text-lg font-semibold hover:underline">Home</Link>
          <Link to="/blog" className="text-white text-lg font-semibold hover:underline">Blog</Link>
        </nav>
        <motion.div 
          className="flex justify-center space-x-8 mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <motion.a 
            href="https://vite.dev" 
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
          </motion.a>
          <motion.a 
            href="https://react.dev" 
            target="_blank"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={reactLogo} className="h-24 w-24 animate-spin-slow" alt="React logo" />
          </motion.a>
        </motion.div>
        <motion.h1 
          className="text-6xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Vite + React
        </motion.h1>
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            count is {count}
          </motion.button>
          <p className="text-gray-200 text-lg">
            Edit <code className="bg-gray-800 px-2 py-1 rounded text-green-400">src/App.jsx</code> and save to test HMR
          </p>
        </motion.div>
        <motion.p 
          className="text-gray-300 mt-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Click on the Vite and React logos to learn more
        </motion.p>
      </motion.div>
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
