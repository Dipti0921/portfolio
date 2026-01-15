"use client"

import React from 'react'
import { Heart, Sparkles } from 'lucide-react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative py-12 bg-white border-t-2 border-pink-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-pink-400" />
                        <span className="text-xl font-bold gradient-text">Dipti Khalane</span>
                        <Sparkles className="w-5 h-5 text-pink-400" />
                    </div>

                    <div className="flex items-center gap-2 text-rose-700/70 text-sm">
                        <span>Crafted with</span>
                        <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
                        <span>and lots of data</span>
                    </div>

                    <p className="text-xs text-rose-500/60">
                        © {currentYear} Dipti Khalane. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Decorative bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400" />
        </footer>
    )
}

export default Footer
