"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { HERO_CONTENT, MARINE_LIFE_SECTION, CONTENT_CARDS } from "./constants"
import ErrorBoundary from "./components/ErrorBoundary"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {isClient && (
          <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/coral-reef-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">{HERO_CONTENT.title}</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white">{HERO_CONTENT.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg transition-colors"
            >
              {HERO_CONTENT.cta1}
            </Link>
            <Link
              href="/about"
              className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg transition-colors"
            >
              {HERO_CONTENT.cta2}
            </Link>
          </div>
        </div>
      </section>

      {/* 3D Models Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{MARINE_LIFE_SECTION.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MARINE_LIFE_SECTION.models.map((model, index) => (
              <ErrorBoundary
                key={index}
                fallback={
                  <div className="aspect-square bg-accent rounded-lg flex items-center justify-center">
                    Failed to load 3D model
                  </div>
                }
              >
                <div className="aspect-square bg-accent rounded-lg overflow-hidden backdrop-blur-sm">
                  {isClient && (
                    <model-viewer
                      src={model.modelSrc}
                      alt={`3D model of ${model.name}`}
                      camera-controls
                      auto-rotate
                      disable-zoom
                      interaction-prompt="none"
                      skybox-image={model.skyboxSrc ?? ""}
                      environment-image={model.environmentSrc ?? ""}
                      style={{ width: "100%", height: "100%" }}
                    ></model-viewer>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white">
                    <h3 className="text-lg font-semibold mb-2">{model.name}</h3>
                    <p className="text-sm">{model.description}</p>
                  </div>
                </div>
              </ErrorBoundary>
            ))}
          </div>
        </div>
      </section>

      {/* Content Cards */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTENT_CARDS.map((card, index) => (
            <div key={index} className="group relative h-full rounded-lg overflow-hidden cursor-pointer bg-card">
              <div className="absolute inset-0 transition-all duration-300" />
              <div className="relative h-full p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-300 mb-4">{card.description}</p>
                <ul className="text-gray-400 mb-4 space-y-2">
                  {card.content.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${card.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mt-auto bg-primary/20 hover:bg-primary/30 text-primary-foreground px-4 py-2 rounded-lg transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

