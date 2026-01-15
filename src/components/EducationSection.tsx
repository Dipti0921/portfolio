"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen, Sparkles, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const EducationSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const certifications = [
        'Professional Certification in Data Analytics',
        'Coursework: Python, SQL, Excel, Power BI, Data Visualization',
        'Student leadership award in hackathon management'
    ]

    return (
        <section id="education" className="relative py-20 md:py-28 overflow-hidden bg-white" ref={ref}>
            <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-100 border border-pink-200 mb-6">
                        <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
                        <span className="text-sm font-semibold text-rose-900">Education</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-900 mb-4">
                        Academic <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-lg text-rose-700/70">
                        Building a strong foundation in computer science and data analytics
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Card className="border-2 border-pink-200 bg-gradient-to-br from-white to-pink-50/30 mb-8 overflow-hidden card-hover">
                            <CardHeader className="pb-4">
                                <div className="flex items-start gap-6">
                                    <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400 shadow-lg flex-shrink-0">
                                        <GraduationCap className="w-8 h-8 text-white" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                            <CardTitle className="text-2xl font-bold text-rose-900">
                                                Bachelor of Technology
                                            </CardTitle>
                                            <Badge className="mt-2 sm:mt-0 bg-pink-100 text-pink-700 border-pink-200 text-xs">
                                                July 2021 - May 2025
                                            </Badge>
                                        </div>

                                        <p className="text-pink-600 font-semibold mb-2">Computer Science</p>
                                        <p className="text-rose-700/70 mb-4">Sandip University, Nashik, India</p>

                                        <div className="flex items-center gap-3 p-3 rounded-xl bg-pink-100 border border-pink-200 inline-flex">
                                            <Star className="w-5 h-5 text-pink-500 fill-pink-500" />
                                            <div>
                                                <p className="text-xs text-rose-600">Cumulative GPA</p>
                                                <p className="text-2xl font-bold gradient-text">8.9/10</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="border-2 border-pink-200 bg-white/80 backdrop-blur-sm">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 shadow-md">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-rose-900">
                                        Certifications & Achievements
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {certifications.map((cert, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start gap-3 p-3 rounded-xl bg-pink-50 border border-pink-100"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        >
                                            <BookOpen className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-rose-800">{cert}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default EducationSection
