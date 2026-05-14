import { useState } from 'react'
import "./styles/globals.css"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import pt from "./locales/pt"
import en from "./locales/en"


function App() {
  const [language, setLanguage] = useState("pt");
  const translations = language === "pt" ? pt : en

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <NavBar
        translations = {translations}
        language = {language}
        setLanguage = {setLanguage}
      />

      <Home translations={translations} />

      <Footer />
    </main>   
  )
}

export default App