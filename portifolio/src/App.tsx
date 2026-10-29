import { useState } from 'react'
import "./styles/globals.css"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import pt from "./locales/pt"
import en from "./locales/en"
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
      <About translations={translations} />
      <Projects translations={translations}/>
      <Contact translations={translations} />

      <Footer translations={translations} />
    </main>   
  )
}

export default App