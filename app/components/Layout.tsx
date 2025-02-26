"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { SITE_TITLE, NAV_ITEMS } from "../constants"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const isDark = typeof localStorage !== "undefined" ? localStorage.getItem("darkMode") === "true" : true
    setIsDarkMode(isDark)
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", isDark)
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("darkMode", newMode.toString())
    }
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", newMode)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold">
              {SITE_TITLE}
            </Link>

            <div className="flex items-center">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-accent transition-colors duration-200 mr-2"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>

              <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`hover:text-primary transition-colors ${pathname === item.href ? "text-primary" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/get-started"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-background py-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md ${
                    pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-accent"
                  } transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/get-started"
                className="block px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">{children}</main>

      <footer className="bg-muted py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2023 Coral Reef Conservation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

