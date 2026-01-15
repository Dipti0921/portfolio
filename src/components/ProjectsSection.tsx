"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { ExternalLink, Sparkles, TrendingUp, Database } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const ProjectsSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const projects = [
        {
            title: 'Health Insurance Data Analysis',
            category: 'Python',
            description: 'Analyzed healthcare cost dataset to identify key predictors of insurance charges.',
            tags: ['Python', 'Pandas', 'Seaborn', 'EDA'],
            icon: TrendingUp,
            gradient: 'from-pink-400 to-rose-400',
            chartData: [
                { name: 'Smoking', impact: 85 },
                { name: 'BMI', impact: 65 },
                { name: 'Age', impact: 45 },
                { name: 'Region', impact: 25 },
            ],
            chartType: 'bar'
        },
        {
            title: 'Uber Dataset Dashboard',
            category: 'Power BI',
            description: 'Interactive dashboard analyzing ride bookings, revenue patterns, and customer trends.',
            tags: ['Power BI', 'DAX', 'Data Modeling', 'Excel'],
            icon: Database,
            gradient: 'from-rose-400 to-pink-500',
            chartData: [
                { name: 'Completed', value: 65, color: '#FF9AA2' },
                { name: 'Cancelled', value: 20, color: '#FFB6C1' },
                { name: 'Pending', value: 15, color: '#FFC0CB' },
            ],
            chartType: 'pie'
        },
    ]

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="glass rounded-xl p-3 border-2 border-pink-200">
                    <p className="text-sm font-semibold text-rose-900">{payload[0].name}</p>
                    <p className="text-xs text-pink-600">
                        {payload[0].value}% Impact
                    </p>
                </div>
            )
        }
        return null
    }

    return (
        <section id="projects" className="relative py-20 md:py-28 overflow-hidden bg-white">
            <div className="absolute inset-0 dot-pattern pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-100 border border-pink-200 mb-6">
                        <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
                        <span className="text-sm font-semibold text-rose-900">Portfolio</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-900 mb-4">
                        Data <span className="gradient-text">Adventures</span>
                    </h2>
                    <p className="text-lg text-rose-700/70">
                        Real-world projects where data tells interesting stories
                    </p>
                </motion.div>

                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-pink-100 p-1 rounded-full">
                        <TabsTrigger value="all" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-md">
                            All
                        </TabsTrigger>
                        <TabsTrigger value="python" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-md">
                            Python
                        </TabsTrigger>
                        <TabsTrigger value="powerbi" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-md">
                            Power BI
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                >
                                    <Card className="group h-full border-2 border-pink-200 bg-gradient-to-br from-white to-pink-50/30 hover:border-pink-300 transition-all duration-300 card-hover overflow-hidden">
                                        {/* Header */}
                                        <CardHeader>
                                            <div className="flex items-start justify-between mb-4">
                                                <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
                                                    <project.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <Badge className="bg-pink-100 text-pink-700 border-pink-200">
                                                    {project.category}
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-rose-900 group-hover:text-pink-600 transition-colors">
                                                {project.title}
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent className="space-y-4">
                                            <p className="text-rose-700/70 leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Chart Preview */}
                                            <div className="h-48 bg-pink-50/50 rounded-xl p-4 border border-pink-100">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    {project.chartType === 'bar' ? (
                                                        <BarChart data={project.chartData}>
                                                            <Tooltip content={<CustomTooltip />} />
                                                            <Bar dataKey="impact" fill="#FF9AA2" radius={[8, 8, 0, 0]} />
                                                        </BarChart>
                                                    ) : (
                                                        <PieChart>
                                                            <Pie
                                                                data={project.chartData}
                                                                cx="50%"
                                                                cy="50%"
                                                                innerRadius={40}
                                                                outerRadius={70}
                                                                paddingAngle={5}
                                                                dataKey="value"
                                                            >
                                                                {project.chartData.map((entry: any, index) => (
                                                                    <Cell key={`cell-${index}`} fill={entry.color || '#FF9AA2'} />
                                                                ))}
                                                            </Pie>
                                                            <Tooltip />
                                                        </PieChart>
                                                    )}
                                                </ResponsiveContainer>
                                            </div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <Badge
                                                        key={tag}
                                                        variant="outline"
                                                        className="border-pink-200 text-rose-700 bg-white/80"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="python">
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.filter(p => p.category === 'Python').map((project, index) => (
                                <Card key={project.title} className="border-2 border-pink-200">
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{project.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="powerbi">
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.filter(p => p.category === 'Power BI').map((project, index) => (
                                <Card key={project.title} className="border-2 border-pink-200">
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{project.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default ProjectsSection
