"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { LineChart, Line, AreaChart, Area, ResponsiveContainer } from 'recharts'
import { Coffee, Award, Code2, Heart, TrendingUp, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const StatsSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const stats = [
        {
            icon: Award,
            value: 8.9,
            suffix: '/10',
            label: 'CGPA',
            description: 'Academic Excellence',
            color: 'from-pink-400 to-rose-400',
            sparklineData: [
                { value: 7.5 }, { value: 8.0 }, { value: 8.3 }, { value: 8.5 }, { value: 8.7 }, { value: 8.9 }
            ],
            decimals: 1
        },
        {
            icon: Code2,
            value: 2,
            suffix: '+',
            label: 'Projects',
            description: 'Data Adventures',
            color: 'from-rose-400 to-pink-500',
            sparklineData: [
                { value: 0 }, { value: 0 }, { value: 1 }, { value: 1 }, { value: 2 }, { value: 2 }
            ],
            decimals: 0
        },
        {
            icon: TrendingUp,
            value: 5,
            suffix: '+',
            label: 'Tools Mastered',
            description: 'Tech Stack',
            color: 'from-pink-500 to-rose-500',
            sparklineData: [
                { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 4 }, { value: 5 }
            ],
            decimals: 0
        },
        {
            icon: Coffee,
            value: 500,
            suffix: '+',
            label: 'Cups of Tea',
            description: 'Productivity Fuel',
            color: 'from-rose-500 to-pink-400',
            sparklineData: [
                { value: 100 }, { value: 200 }, { value: 300 }, { value: 400 }, { value: 450 }, { value: 500 }
            ],
            decimals: 0
        },
    ]

    return (
        <section id="stats" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-pink-200/20 blur-[80px]" />
                <div className="absolute bottom-1/4 left-0 w-[250px] h-[250px] rounded-full bg-rose-200/20 blur-[70px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                {/* Section Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-100 border border-pink-200 mb-6">
                        <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
                        <span className="text-sm font-semibold text-rose-900">Live Stats Dashboard</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-900 mb-4">
                        By the <span className="gradient-text">Numbers</span>
                    </h2>
                    <p className="text-lg text-rose-700/70">
                        A snapshot of my journey in data analytics
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="relative group overflow-hidden border-2 border-pink-200 bg-white/80 backdrop-blur-sm hover:border-pink-300 transition-all duration-300 card-hover">
                                <CardContent className="p-6">
                                    {/* Icon */}
                                    <div className="mb-4">
                                        <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                                            <stat.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    {/* Number Counter */}
                                    <div className="mb-2">
                                        <h3 className="text-5xl font-bold gradient-text counter-number">
                                            {inView && (
                                                <CountUp
                                                    end={stat.value}
                                                    duration={2.5}
                                                    delay={index * 0.1}
                                                    decimals={stat.decimals}
                                                    decimal="."
                                                />
                                            )}
                                            <span className="text-3xl">{stat.suffix}</span>
                                        </h3>
                                    </div>

                                    {/* Label */}
                                    <p className="text-sm font-semibold text-rose-900 mb-1">{stat.label}</p>
                                    <p className="text-xs text-rose-600/70">{stat.description}</p>

                                    {/* Mini Sparkline */}
                                    <div className="mt-4 h-12">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={stat.sparklineData}>
                                                <defs>
                                                    <linearGradient id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0%" stopColor="#FF9AA2" stopOpacity={0.4} />
                                                        <stop offset="100%" stopColor="#FF9AA2" stopOpacity={0.1} />
                                                    </linearGradient>
                                                </defs>
                                                <Area
                                                    type="monotone"
                                                    dataKey="value"
                                                    stroke="#FF9AA2"
                                                    strokeWidth={2}
                                                    fill={`url(#gradient-${index})`}
                                                    animationDuration={1500}
                                                    animationBegin={index * 100}
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>

                                    {/* Decorative corner */}
                                    <motion.div
                                        className="absolute -top-1 -right-1 w-8 h-8"
                                        style={{
                                            background: 'linear-gradient(135deg, #FF9AA2 0%, transparent 100%)',
                                            clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                                        }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 0.5 }}
                                    />
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    )
}

export default StatsSection
