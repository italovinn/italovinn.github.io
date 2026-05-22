import { useState } from 'react'
import "./styles/globals.css"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import pt from "./locales/pt"
import en from "./locales/en"
import VantaBackground from "./components/effects/VantaBackground";
import AnimatedBackground from "./components/effects/AnimatedBackground";


function App() {
  const [language, setLanguage] = useState("pt");
  const translations = language === "pt" ? pt : en

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">

      <AnimatedBackground />

      <div className="relative z-10">

        <NavBar
          translations = {translations}
          language = {language}
          setLanguage = {setLanguage}
        />
        
      </div>

      

      <Home translations={translations} />

      <Footer />
    </main>   
  )
}

export default App