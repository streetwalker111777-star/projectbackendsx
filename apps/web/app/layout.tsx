import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Antigravity Platform',
  description: 'Plataforma de perfiles con moderación de contenido',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
