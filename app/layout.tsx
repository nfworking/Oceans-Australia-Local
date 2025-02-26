'use client'
import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Script from "next/script"
import Layout from "./components/Layout"
import { SITE_TITLE, SITE_DESCRIPTION } from "./constants"

const inter = Inter({ subsets: ["latin"] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
          strategy="beforeInteractive"
        />
        <style jsx global>{`
          .fish-cursor {
            cursor: url('/fish-cursor.png'), auto;
          }
        `}</style>
      </head>
      <body className={`${inter.className} fish-cursor`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}



import './globals.css'
