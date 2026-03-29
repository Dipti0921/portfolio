"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BarChart, Bar, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { Sparkles, TrendingUp, Database, Wind } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const ProjectsSection: React.FC = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    const projects: any[] = [
        {
            id: 'health',
            title: 'Health Insurance Data Analysis',
            category: 'Python + Power BI',
            tab: 'python',
            description: 'End-to-end analysis of a Kaggle health insurance dataset using Python for EDA, SQL for querying, Excel for summaries, and Power BI for an interactive cost dashboard.',
            tags: ['Python', 'Pandas', 'SQL', 'Excel', 'Power BI', 'Seaborn'],
            icon: TrendingUp,
            gradient: 'from-pink-400 to-rose-400',
            chartData: [
                { name: 'Smoking', impact: 85 },
                { name: 'BMI', impact: 65 },
                { name: 'Age', impact: 45 },
                { name: 'Region', impact: 25 },
            ],
            chartType: 'bar',
            highlights: [
                'Smoking & BMI are top cost predictors',
                'EDA across age, region & lifestyle factors',
                'Power BI dashboard for cost visualization',
            ]
        },
        {
            id: 'uber',
            title: 'Uber Dataset Dashboard',
            category: 'Power BI',
            tab: 'powerbi',
            description: 'Interactive Power BI dashboard analyzing ride bookings, revenue patterns, vehicle performance, and customer/driver ratings using DAX calculations and data modeling.',
            tags: ['Power BI', 'DAX', 'Data Modeling', 'Power Query'],
            icon: Database,
            gradient: 'from-rose-400 to-pink-500',
            chartData: [
                { name: 'Completed', value: 65, color: '#FF9AA2' },
                { name: 'Cancelled', value: 20, color: '#FFB6C1' },
                { name: 'Pending', value: 15, color: '#FFC0CB' },
            ],
            chartType: 'pie',
            highlights: [
                'KPIs: revenue, bookings & ratings',
                'Monthly & quarterly ride trends',
                'Vehicle type performance analysis',
            ]
        },
        {
            id: 'aqi',
            title: 'Air Quality Index (AQI) Dashboard',
            category: 'Power BI',
            tab: 'powerbi',
            description: 'Power BI dashboard analyzing AQI data across Indian cities. Used Power Query for data cleaning and DAX measures to surface pollution patterns and actionable recommendations.',
            tags: ['Power BI', 'Power Query', 'DAX', 'Kaggle'],
            icon: Wind,
            gradient: 'from-fuchsia-400 to-pink-400',
            chartData: [
                { subject: 'PM2.5', value: 90 },
                { subject: 'PM10', value: 80 },
                { subject: 'NO2', value: 55 },
                { subject: 'SO2', value: 40 },
                { subject: 'CO', value: 35 },
                { subject: 'O3', value: 30 },
            ],
            chartType: 'radar',
            highlights: [
                'PM2.5 & PM10 dominant across cities',
                'Pune, Mumbai & Sangli most polluted',
                'Recommended industrial & urban controls',
            ]
        },
    ]

    const CustomBarTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="rounded-xl p-3 border-2 border-pink-200 bg-white shadow-md">
                    <p className="text-sm font-semibold text-rose-900">{payload[0].payload.name}</p>
                    <p className="text-xs text-pink-600">{payload[0].value}% Impact</p>
                </div>
            )
        }
        return null
    }

    const BarChartWidget = ({ data }: { data: any[] }) => (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <Tooltip content={<CustomBarTooltip />} />
                <Bar dataKey="impact" fill="#FF9AA2" radius={[8, 8, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    )

    const PieChartWidget = ({ data }: { data: any[] }) => (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={5} dataKey="value">
                    {data.map((entry: any, i: number) => (
                        <Cell key={`cell-${i}`} fill={entry.color || '#FF9AA2'} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    )

    const RadarChartWidget = ({ data }: { data: any[] }) => (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data}>
                <PolarGrid stroke="#FFB6C1" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#9f1239' }} />
                <Radar dataKey="value" stroke="#F43F5E" fill="#FF9AA2" fillOpacity={0.5} />
                <Tooltip />
            </RadarChart>
        </ResponsiveContainer>
    )

    const ProjectCard = ({ project, index }: { project: any, index: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
        >
            <Card className="group h-full border-2 border-pink-200 bg-gradient-to-br from-white to-pink-50/30 hover:border-pink-300 transition-all duration-300 card-hover overflow-hidden">
                <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
                            <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-pink-100 text-pink-700 border-pink-200">
                            {project.category}
                        </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-rose-900 group-hover:text-pink-600 transition-colors">
                        {project.title}
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    <p className="text-rose-700/70 leading-relaxed text-sm">
                        {project.description}
                    </p>

                    <div className="h-44 bg-pink-50/50 rounded-xl p-3 border border-pink-100">
                        {project.chartType === 'bar' && <BarChartWidget data={project.chartData} />}
                        {project.chartType === 'pie' && <PieChartWidget data={project.chartData} />}
                        {project.chartType === 'radar' && <RadarChartWidget data={project.chartData} />}
                    </div>

                    <ul className="space-y-1">
                        {project.highlights.map((h: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-rose-700/80">
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0" />
                                {h}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-1">
                        {project.tags.map((tag: string) => (
                            <Badge key={tag} variant="outline" className="border-pink-200 text-rose-700 bg-white/80 text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )

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
                        <TabsTrigger value="all" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-md">All</TabsTrigger>
                        <TabsTrigger value="python" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-md">Python</TabsTrigger>
                        <TabsTrigger value="powerbi" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-md">Power BI</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="python">
                        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                            {projects.filter((p: any) => p.tab === 'python').map((project: any, index: number) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="powerbi">
                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.filter((p: any) => p.tab === 'powerbi').map((project: any, index: number) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

export default ProjectsSection
