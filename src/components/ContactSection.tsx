"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Phone, MapPin, Send, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const ContactSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'khalanedipti@gmail.com',
            href: 'mailto:khalanedipti@gmail.com',
            gradient: 'from-pink-400 to-rose-400'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'dipti-khalane',
            href: 'https://www.linkedin.com/in/dipti-khalane',
            gradient: 'from-rose-400 to-pink-500'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91-8329341921',
            href: 'tel:+918329341921',
            gradient: 'from-pink-500 to-rose-500'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Pune, India',
            href: '#',
            gradient: 'from-rose-500 to-pink-400'
        }
    ]

    return (
        <section id="contact" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
            <div className="absolute inset-0 dot-pattern pointer-events-none opacity-50" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-100 border border-pink-200 mb-6"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
                        <span className="text-sm font-semibold text-rose-900">Let's Connect</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-900 mb-4">
                        Say <span className="gradient-text">Hello!</span>
                    </h2>
                    <p className="text-lg text-rose-700/70">
                        I'd love to hear about your data projects or just chat about analytics!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                    {contactInfo.map((item, index) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            target={item.label === 'LinkedIn' ? '_blank' : undefined}
                            rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                        >
                            <Card className="group h-full border-2 border-pink-200 bg-white/80 hover:border-pink-300 card-hover text-center">
                                <CardContent className="p-6">
                                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} mb-4 shadow-lg`}>
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-rose-500 mb-2">{item.label}</h3>
                                    <p className="text-rose-900 font-medium text-sm break-words">{item.value}</p>
                                </CardContent>
                            </Card>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all btn-shine"
                        asChild
                    >
                        <a href="mailto:khalanedipti@gmail.com">
                            <Send className="w-5 h-5 mr-2" />
                            Send Me an Email
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactSection
