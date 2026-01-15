"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, BarChart3, Sparkles, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

interface Skill {
    name: string
    level: number
    color: string
}

interface SkillCategory {
    title: string
    icon: React.ElementType
    iconColor: string
    bgGradient: string
    skills: Skill[]
}

const skillCategories: SkillCategory[] = [
    {
        title: 'Programming',
        icon: Code2,
        iconColor: 'text-white',
        bgGradient: 'from-pink-400 to-rose-400',
        skills: [
            { name: 'Python', level: 90, color: 'bg-gradient-to-r from-pink-400 to-rose-400' },
            { name: 'SQL', level: 85, color: 'bg-gradient-to-r from-pink-400 to-rose-400' },
        ],
    },
    {
        title: 'Analysis Tools',
        icon: Database,
        iconColor: 'text-white',
        bgGradient: 'from-rose-400 to-pink-500',
        skills: [
            { name: 'Pandas', level: 88, color: 'bg-gradient-to-r from-rose-400 to-pink-500' },
            { name: 'NumPy', level: 85, color: 'bg-gradient-to-r from-rose-400 to-pink-500' },
            { name: 'Excel', level: 92, color: 'bg-gradient-to-r from-rose-400 to-pink-500' },
        ],
    },
    {
        title: 'Visualization',
        icon: BarChart3,
        iconColor: 'text-white',
        bgGradient: 'from-pink-500 to-rose-500',
        skills: [
            { name: 'Power BI', level: 88, color: 'bg-gradient-to-r from-pink-500 to-rose-500' },
            { name: 'Matplotlib', level: 80, color: 'bg-gradient-to-r from-pink-500 to-rose-500' },
            { name: 'Seaborn', level: 82, color: 'bg-gradient-to-r from-pink-500 to-rose-500' },
        ],
    },
]

const softSkills = [
    'Communication', 'Active Listening', 'Team Collaboration', 'Problem Solving', 'Adaptability'
]

const SkillBar: React.FC<{ skill: Skill; delay: number; isInView: boolean }> = ({ skill, delay, isInView }) => (
    <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-rose-800">{skill.name}</span>
            <span className="text-xs text-pink-600 font-semibold">{skill.level}%</span>
        </div>
        <div className="h-2.5 bg-pink-100 rounded-full overflow-hidden">
            <motion.div
                className={`h-full rounded-full ${skill.color} shadow-sm`}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: delay, ease: 'easeOut' }}
            />
        </div>
    </div>
)

const SkillsSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="skills" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50" ref={ref}>
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
                        <span className="text-sm font-semibold text-rose-900">Skills & Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-900 mb-4">
                        My Tool <span className="gradient-text">Belt</span>
                    </h2>
                    <p className="text-lg text-rose-700/70">
                        The skills I use to turn data into insights
                    </p>
                </motion.div>

                {/* Technical Skills Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            <Card className="h-full border-2 border-pink-200 bg-white/80 backdrop-blur-sm card-hover">
                                <CardContent className="p-6">
                                    {/* Category Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.bgGradient} shadow-lg`}>
                                            <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                                        </div>
                                        <h3 className="text-lg font-bold text-rose-900">{category.title}</h3>
                                    </div>

                                    {/* Skills */}
                                    {category.skills.map((skill, skillIndex) => (
                                        <SkillBar
                                            key={skill.name}
                                            skill={skill}
                                            delay={0.3 + categoryIndex * 0.1 + skillIndex * 0.05}
                                            isInView={inView}
                                        />
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Soft Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold text-rose-900 text-center mb-8">
                        Interpersonal Skills
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                            >
                                <Badge className="px-5 py-2.5 text-sm border-2 border-pink-200 bg-white text-rose-800 hover:bg-pink-50 transition-all cursor-default">
                                    {skill}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default SkillsSection
