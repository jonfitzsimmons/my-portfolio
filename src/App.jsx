import { motion } from 'framer-motion'
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'

const caseStudies = [
  {
    id: 'community-health',
    number: '01',
    title: 'Community Health',
    features: [
      'Activity Feed',
      'Discussions',
      'Article Commenting',
      'Bet Sharing',
      'Temperature Check',
      'User Profiles',
      'Mentions',
    ],
    stats: [
      { label: 'MAU', value: '+ 200%' },
      { label: 'Revenue', value: '+ $1.2m' },
      { label: 'Engagement', value: '+ 80%' },
    ],
    image: '/phone-mockup.png', // Placeholder, replace with your image
    preview: true,
  },
  {
    id: 'player-profiles',
    number: '02',
    title: 'Player Profiles',
    features: [
      'Profile Overview',
      'Performance Trends',
      'Stats Comparison',
      'Favorites',
      'Mentions',
    ],
    stats: [
      { label: 'Engagement', value: '+ 80%' },
      { label: 'MAU', value: '+ 200%' },
      { label: 'Revenue', value: '+ $1.2m' },
    ],
    image: '/phone-mockup.png',
    preview: false,
  },
  {
    id: 'bet-sharing',
    number: '03',
    title: 'Bet Sharing',
    features: [
      'Share Bets',
      'Community Leaderboard',
      'Win/Loss Tracking',
      'Social Engagement',
    ],
    stats: [
      { label: 'Shares', value: '+ 150%' },
      { label: 'Engagement', value: '+ 60%' },
      { label: 'Revenue', value: '+ $800k' },
    ],
    image: '/phone-mockup.png',
    preview: false,
  },
]

function Home() {
  const navigate = useNavigate();
  const mainCase = caseStudies[0];
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans">
      {/* Navigation */}
      <header className="container mx-auto flex justify-between items-center pt-12 px-8">
        <div>
          <span className="block text-[1.75rem] font-bold text-black leading-tight">Jon Fitzsimmons</span>
          <span className="block text-gray-500 font-medium text-base mt-1">Product Designer</span>
        </div>
        <nav className="flex space-x-12 items-center">
          <Link to="/case-studies" className="text-lg font-semibold text-black hover:text-gray-700">Case Studies</Link>
          <Link to="/about" className="text-lg font-semibold text-black hover:text-gray-700">About</Link>
          <Link to="/craft" className="text-lg font-semibold text-black hover:text-gray-700">Craft</Link>
        </nav>
      </header>
      <main className="container mx-auto flex flex-row items-center justify-between px-8 pt-20 pb-8" style={{minHeight: 'calc(100vh - 120px)'}}>
        {/* Left Content */}
        <div className="flex flex-col justify-center w-[420px]">
          <div>
            <h2 className="text-2xl font-bold text-black mb-2 flex items-end tracking-tight">Community Health <span className="text-xs font-normal ml-2 text-gray-400">01</span></h2>
            <ul className="mb-8">
              {mainCase.features.map((f, i) => (
                <li key={f} className="text-xl font-medium text-gray-500 mb-1 leading-tight">{f}</li>
              ))}
            </ul>
            <div className="flex flex-col space-y-3 mb-8">
              {mainCase.stats.map((s, i) => (
                <div key={s.label} className="bg-white rounded-lg border border-gray-200 px-7 py-4 flex flex-col items-center min-w-[140px] shadow-sm">
                  <span className="text-xl font-bold text-black leading-none">{s.value}</span>
                  <span className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wide">{s.label}</span>
                </div>
              ))}
            </div>
            <button
              className="mt-2 text-gray-700 font-medium flex items-center hover:underline group"
              onClick={() => navigate('/case-studies')}
            >
              <span className="mr-2 text-2xl">👋</span> <span>View all case studies</span> <span className="ml-1 group-hover:translate-x-1 transition-transform">↗</span>
            </button>
          </div>
        </div>
        {/* Right Content */}
        <div className="flex-1 flex justify-end items-center">
          <div className="relative">
            <img src="/phone-mockup.png" alt="Phone Mockup" className="w-[340px] h-[700px] object-cover rounded-3xl shadow-2xl border border-gray-300" />
          </div>
        </div>
      </main>
    </div>
  )
}

function CaseStudiesList() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <nav className="flex justify-between items-center px-12 pt-10">
        <div>
          <span className="block text-2xl font-bold text-black">Jon Fitzsimmons</span>
          <span className="block text-gray-500 font-medium text-base">Product Designer</span>
        </div>
        <div className="flex space-x-12 items-center">
          <Link to="/case-studies" className="text-lg font-semibold text-black hover:text-gray-700">Case Studies</Link>
          <Link to="/about" className="text-lg font-semibold text-black hover:text-gray-700">About</Link>
          <Link to="/craft" className="text-lg font-semibold text-black hover:text-gray-700">Craft</Link>
        </div>
      </nav>
      <div className="flex-1 flex flex-col items-center justify-center px-8 pt-8">
        <h1 className="text-4xl font-bold text-black mb-12">Case Studies</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {caseStudies.map(cs => (
            <Link key={cs.id} to={`/case-studies/${cs.id}`} className="bg-white rounded-2xl shadow border border-gray-200 p-8 flex flex-col items-start hover:shadow-lg transition-shadow duration-200">
              <span className="text-xs text-gray-400 font-semibold mb-2">{cs.number}</span>
              <span className="text-2xl font-bold text-black mb-4">{cs.title}</span>
              <ul className="mb-4">
                {cs.features.slice(0, 3).map(f => (
                  <li key={f} className="text-base text-gray-600 mb-1">{f}</li>
                ))}
              </ul>
              <div className="flex space-x-2 mt-auto">
                {cs.stats.map(s => (
                  <div key={s.label} className="bg-gray-50 rounded px-3 py-2 text-xs font-semibold text-gray-700 border border-gray-200">{s.value} <span className="text-gray-400">{s.label}</span></div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const idx = caseStudies.findIndex(cs => cs.id === id);
  const cs = caseStudies[idx];
  if (!cs) return <div className="min-h-screen flex items-center justify-center">Not found</div>;
  const prev = idx > 0 ? caseStudies[idx - 1] : null;
  const next = idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null;
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <div className="flex justify-between items-center px-12 pt-10">
        <button onClick={() => navigate(-1)} className="text-lg text-gray-500 hover:text-black font-semibold">&times; Close</button>
        <div className="flex space-x-8 items-center">
          {prev && <Link to={`/case-studies/${prev.id}`} className="text-gray-500 hover:text-black font-semibold">&lt; Previous</Link>}
          {next && <Link to={`/case-studies/${next.id}`} className="text-black font-bold hover:text-gray-700">Next Case Study &rarr;</Link>}
        </div>
      </div>
      <div className="flex-1 flex flex-row items-center justify-between px-24 pt-8 relative">
        {/* Large number in background */}
        <span className="absolute left-1/2 top-1/2 text-[12rem] text-gray-100 font-bold opacity-30 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">{cs.number}</span>
        {/* Left Content */}
        <div className="flex flex-col justify-center z-10" style={{ minWidth: 420 }}>
          <h2 className="text-4xl font-bold text-black mb-4">{cs.title}</h2>
          <p className="text-lg text-gray-500 mb-8 max-w-xl">This is a brief introduction to a project that should only span a max of two to three lines if we can help it.</p>
          <div className="flex space-x-4 mb-8">
            {cs.stats.map((s, i) => (
              <div key={s.label} className="bg-white rounded-lg shadow border border-gray-200 px-6 py-4 flex flex-col items-center min-w-[110px]">
                <span className="text-xl font-bold text-black">{s.value}</span>
                <span className="text-xs text-gray-500 font-semibold mt-1">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-base max-w-xl">Next is a breakdown of how we went about solving the problems and how we contributed to the project outside of the figma file. It's just as important to communicate how you work with others when you're interviewing.</p>
        </div>
        {/* Right Content */}
        <div className="flex-1 flex justify-center items-center z-10">
          <div className="relative">
            <img src="/phone-mockup.png" alt="Phone Mockup" className="w-[340px] h-auto rounded-3xl shadow-2xl border border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <nav className="flex justify-between items-center px-12 pt-10">
        <div>
          <span className="block text-2xl font-bold text-black">Jon Fitzsimmons</span>
          <span className="block text-gray-500 font-medium text-base">Product Designer</span>
        </div>
        <div className="flex space-x-12 items-center">
          <Link to="/case-studies" className="text-lg font-semibold text-black hover:text-gray-700">Case Studies</Link>
          <Link to="/about" className="text-lg font-semibold text-black hover:text-gray-700">About</Link>
          <Link to="/craft" className="text-lg font-semibold text-black hover:text-gray-700">Craft</Link>
        </div>
      </nav>
      <div className="flex-1 flex flex-col items-center justify-center px-8 pt-8">
        <h1 className="text-4xl font-bold text-black mb-8">About</h1>
        <p className="text-xl text-gray-600 max-w-2xl text-center">I'm a product designer passionate about creating meaningful digital experiences that solve real problems. My approach combines user-centered design principles with technical understanding to deliver solutions that are both beautiful and functional.</p>
      </div>
    </div>
  )
}

function Craft() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <nav className="flex justify-between items-center px-12 pt-10">
        <div>
          <span className="block text-2xl font-bold text-black">Jon Fitzsimmons</span>
          <span className="block text-gray-500 font-medium text-base">Product Designer</span>
        </div>
        <div className="flex space-x-12 items-center">
          <Link to="/case-studies" className="text-lg font-semibold text-black hover:text-gray-700">Case Studies</Link>
          <Link to="/about" className="text-lg font-semibold text-black hover:text-gray-700">About</Link>
          <Link to="/craft" className="text-lg font-semibold text-black hover:text-gray-700">Craft</Link>
        </div>
      </nav>
      <div className="flex-1 flex flex-col items-center justify-center px-8 pt-8">
        <h1 className="text-4xl font-bold text-black mb-8">Craft</h1>
        <p className="text-xl text-gray-600 max-w-2xl text-center">A space for experimental interactions, short articles, and design explorations. Here you'll find quick thoughts, prototypes, and creative experiments that don't fit into full case studies.</p>
      </div>
    </div>
  )
}

function TestLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] flex flex-col font-sans">
      <header className="container mx-auto flex justify-between items-center pt-12 px-8">
        <div>
          <span className="block text-3xl font-extrabold text-white tracking-tight drop-shadow-lg">Vibefolio</span>
          <span className="block text-blue-200 font-medium text-base mt-1">A Fake Portfolio Concept</span>
        </div>
        <nav className="flex space-x-10 items-center">
          <Link to="/" className="text-lg font-semibold text-white hover:text-blue-200 transition">Home</Link>
          <Link to="/case-studies" className="text-lg font-semibold text-white hover:text-blue-200 transition">Case Studies</Link>
          <Link to="/about" className="text-lg font-semibold text-white hover:text-blue-200 transition">About</Link>
          <Link to="/craft" className="text-lg font-semibold text-white hover:text-blue-200 transition">Craft</Link>
          <Link to="/test" className="text-lg font-semibold text-blue-400 underline underline-offset-4">Test</Link>
        </nav>
      </header>
      <main className="container mx-auto flex flex-col items-center justify-center flex-1 px-8 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">Welcome to Vibefolio</h1>
          <p className="text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">A creative playground for portfolio vibes. This is a fake landing page concept with bold gradients, playful layouts, and a modern aesthetic. Use this as inspiration for your next portfolio!</p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 w-72 shadow-lg backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-2">✨ Stand Out</h2>
              <p className="text-blue-100">Use bold colors, big type, and creative layouts to make your work pop.</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 w-72 shadow-lg backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-2">🎨 Show Personality</h2>
              <p className="text-blue-100">Let your site reflect your vibe. Add playful touches, custom graphics, and fun copy.</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 w-72 shadow-lg backdrop-blur-md">
              <h2 className="text-xl font-bold text-white mb-2">🚀 Animate</h2>
              <p className="text-blue-100">Use smooth transitions and micro-interactions to create a delightful experience.</p>
            </div>
          </div>
          <button className="mt-6 px-10 py-4 bg-blue-500 text-white font-bold rounded-full shadow-xl hover:bg-blue-600 transition text-xl">Get Inspired</button>
        </div>
      </main>
      <footer className="text-center text-blue-200 py-8 text-sm opacity-70">&copy; 2025 Vibefolio. All vibes reserved.</footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies" element={<CaseStudiesList />} />
      <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/craft" element={<Craft />} />
      <Route path="/test" element={<TestLanding />} />
    </Routes>
  )
}

export default App
