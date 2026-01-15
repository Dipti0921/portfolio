"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, GraduationCap, Target, Sparkles, Heart, Coffee } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const AboutSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const funFacts = [
        { icon: Coffee, text: 'Coffee-powered coder', gradient: 'from-pink-400 to-rose-400' },
        { icon: Heart, text: 'Data enthusiast', gradient: 'from-rose-400 to-pink-500' },
        { icon: Sparkles, text: 'Excel wizard', gradient: 'from-pink-500 to-rose-500' },
    ]

    const stats = [
        { value: '8.9', label: 'C GPA', suffix: '/10' },
        { value: '2+', label: 'Projects', suffix: '' },
        { value: '5+', label: 'Tools', suffix: '' },
    ]

    return (
        <section id="about" className="relative py-20 md:py-28 overflow-hidden bg-white" ref={ref}>
            <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <Card className="border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-rose-50/30">
                            <CardContent className="p-8">
                                {/* Avatar */}
                                <div className="flex justify-center mb-6">
                                    <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
                                        <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-pink-400 to-rose-400 text-white">
                                            DK
                                        </AvatarFallback>
                                    </Avatar>
                                </div>

                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-rose-900 mb-2">Dipti Khalane</h3>
                                    <p className="text-pink-600 font-medium">Data Analyst</p>
                                </div>


                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-100 border border-pink-200 mb-6">
                            <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
                            <span className="text-sm font-semibold text-rose-900">About Me</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rose-900 mb-6 leading-tight">
                            Turning Data into{' '}
                            <span className="gradient-text">Actionable Insights</span>
                        </h2>

                        <p className="text-lg text-rose-700/70 mb-6 leading-relaxed">
                            Analytical and detail-oriented Computer Science graduate with a strong foundation in
                            <span className="text-pink-600 font-medium"> Python (Pandas, NumPy, Matplotlib)</span>,
                            <span className="text-rose-600 font-medium"> SQL</span>, and
                            <span className="text-pink-600 font-medium"> Excel</span>.
                        </p>

                        <p className="text-lg text-rose-700/70 mb-8 leading-relaxed">
                            I love working with datasets, finding hidden patterns, and creating visualizations
                            that make complex data easy to understand. When I'm not analyzing data, you'll find
                            me learning new tools or sipping Tea while debugging code! 
                        </p>

                        {/* Info Cards */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            <Card className="border-2 border-pink-200 bg-gradient-to-br from-white to-pink-50/30">
                                <CardContent className="p-4 flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-pink-400 to-rose-400">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-rose-500">Location</p>
                                        <p className="text-rose-900 font-semibold">Pune, India</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-pink-200 bg-gradient-to-br from-white to-rose-50/30">
                                <CardContent className="p-4 flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500">
                                        <GraduationCap className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-rose-500">Degree</p>
                                        <p className="text-rose-900 font-semibold">B.Tech in CS</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="text-3xl md:text-4xl font-bold gradient-text">
                                        {stat.value}
                                        <span className="text-xl">{stat.suffix}</span>
                                    </div>
                                    <p className="text-sm text-rose-500 mt-1">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
