"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Stats', href: '#stats' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
]

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'glass border-b-2 border-pink-200'
                        : 'bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-2 group">
                            <span className="text-xl font-bold gradient-text">
                                Dipti.
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-medium text-rose-700 hover:text-pink-600 transition-colors group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 group-hover:w-full transition-all duration-300 rounded-full" />
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                Let&apos;s Chat
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-rose-700 hover:text-pink-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            className="absolute inset-0 bg-rose-900/20 backdrop-blur-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            className="absolute top-16 left-4 right-4 glass border-2 border-pink-200 rounded-2xl p-6 shadow-2xl"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        className="px-4 py-3 text-lg font-medium text-rose-800 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-all"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                                <div className="mt-4 pt-4 border-t-2 border-pink-100">
                                    <a
                                        href="#contact"
                                        className="block w-full text-center px-4 py-3 text-lg font-medium text-white bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl shadow-md"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Let&apos;s Chat
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
