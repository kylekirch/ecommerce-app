// Example: app/layout.js
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

import './globals.css' // Import global styles


export const metadata = { // Optional: Defines metadata for the page (title, description)
  title: 'Funky Fruits Ecommerce App',
  description: 'Made by Kyle Kirchgessner with create-next-app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {<Header />}
        <main>
          {/* Maybe add a navigation directory on the side*/ }
          {children} {/* <--- Page content will be injected here */}
        </main>
        {<Footer />}
      </body>
    </html>
  )
}