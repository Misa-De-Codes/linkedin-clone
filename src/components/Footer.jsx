import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-gray-100 text-gray-700 text-sm mt-10">
                <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p>&copy; 2025 Musa Inc. All rights reserved.</p>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="hover:text-blue-500 transition">Privacy</a>
                        <a href="#" className="hover:text-blue-500 transition">Terms</a>
                        <a href="#" className="hover:text-blue-500 transition">About</a>
                    </div>

                    <div className="flex gap-3">
                        <a href="#" className="hover:text-blue-600 transition">Twitter</a>
                        <a href="#" className="hover:text-pink-600 transition">LinkedIn</a>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer