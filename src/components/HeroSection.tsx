"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useScreenSize } from '@/components/hooks/use-screen-size'
import { PixelTrail } from '@/components/ui/pixel-trail'
import { Sparkles, BarChart3, TrendingUp, Heart, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeroSection: React.FC = () => {
    const screenSize = useScreenSize()
    const [typedText, setTypedText] = useState('')
    const fullText = "Hi there! I'm Dipti 🐾"

    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index))
                index++
            } else {
                clearInterval(timer)
            }
        }, 100)
        return () => clearInterval(timer)
    }, [])

    const floatingElements = [
        { Icon: BarChart3, delay: 0, x: '15%', y: '20%', duration: 4 },
        { Icon: TrendingUp, delay: 0.5, x: '85%', y: '25%', duration: 5 },
        { Icon: Coffee, delay: 1, x: '80%', y: '70%', duration: 6 },
        { Icon: Heart, delay: 1.5, x: '10%', y: '75%', duration: 4.5 },
    ]

    return (
        <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Soft gradient orbs */}
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full bg-pink-200/20 blur-[100px]"
                    style={{ left: '-10%', top: '10%' }}
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full bg-rose-200/15 blur-[120px]"
                    style={{ right: '-5%', top: '40%' }}
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Dot pattern overlay */}
                <div className="absolute inset-0 dot-pattern" />
            </div>

            {/* Pixel Trail Effect */}
            <div className="absolute inset-0 z-0">
                <PixelTrail
                    pixelSize={screenSize.lessThan('md') ? 35 : 50}
                    fadeDuration={0}
                    delay={600}
                    pixelClassName="rounded-full bg-gradient-to-br from-pink-300/30 to-rose-300/30"
                />
            </div>

            {/* Floating Icons */}
            {floatingElements.map(({ Icon, delay, x, y, duration }, index) => (
                <motion.div
                    key={index}
                    className="absolute hidden md:block pointer-events-none"
                    style={{ left: x, top: y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{ delay: delay + 1, duration: 0.8 }}
                >
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
                        transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <Icon className="w-16 h-16 text-pink-400" />
                    </motion.div>
                </motion.div>
            ))}

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pointer-events-none">
                <motion.div
                    className="text-center max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Typing animation */}
                    <motion.h1
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="gradient-text">{typedText}</span>
                        <span className="typing-cursor text-pink-400">|</span>
                    </motion.h1>

                    {/* Role with sparkle */}
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-rose-900/80">
                            Data Analyst
                        </h2>
                        <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl text-rose-800/70 max-w-3xl mx-auto mb-10 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        Turning data into stories and numbers into insights
                        <br />
                        <span className="text-pink-600">Making analytics fun, one chart at a time!</span>
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all btn-shine"
                            asChild
                        >
                            <a href="#projects">
                                <BarChart3 className="w-5 h-5 mr-2" />
                                View My Work
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-pink-300 text-rose-900 hover:bg-pink-50 rounded-full px-8 py-6 text-lg"
                            asChild
                        >
                            <a href="#contact">
                                <Heart className="w-5 h-5 mr-2" />
                                Let's Chat
                            </a>
                        </Button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                    >
                        <motion.div
                            className="flex flex-col items-center gap-2 text-rose-400"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
                            <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center p-2">
                                <motion.div
                                    className="w-1.5 h-1.5 bg-pink-400 rounded-full"
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
