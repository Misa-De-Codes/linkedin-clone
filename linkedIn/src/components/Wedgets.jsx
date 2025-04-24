import React from 'react'


function Wedgets() {
  return (
    <div className='hidden sticky top-17 h-fit self-start lg:flex flex-col flex-1/5 min-w-[200px] max-w-[300px] md:mr-10 mt-20 '>

      <div className="mb-3 p-5 rounded-2xl shadow-md bg-gray-50 ">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/60" className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-semibold text-gray-800">Musa Kun</p>
            <p className="text-sm text-gray-500">@musadev</p>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          📈 Learning MERN | 🔥 Building Projects | 💻 Open to work
        </div>
      </div>

      <div className="mb-3 p-5 rounded-2xl shadow-md bg-gray-50 ">
        <h2 className="font-semibold text-lg text-gray-800 mb-3">🔍 Topics You Follow</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200">#MERN</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200">#OpenToWork</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200">#React</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200">#TailwindCSS</span>
        </div>
      </div>

      <div className="mb-3 p-5 rounded-2xl shadow-md bg-gray-50 ">
        <h2 className="font-semibold text-lg text-gray-800 mb-2">📢 What's Happening</h2>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>🔥 Tailwind v4 coming soon!</li>
          <li>💼 Remote jobs at DevHire</li>
          <li>👀 Musa just posted a new project</li>
        </ul>
      </div>

    </div>
  )
}

export default Wedgets