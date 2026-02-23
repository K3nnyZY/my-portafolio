import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata = {
  title: "Kenny Zhu | Fullstack Engineer",
  description: "Fullstack Engineer specialized in scalable SaaS architecture.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body id="top" className="bg-neutral-950 text-neutral-200">
        <header>
          <Navbar />
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
