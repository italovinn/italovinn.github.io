import { useState } from 'react'
import './App.css'
import NavBar from "./components/layout/NavBar"
import pt from "./locales/pt"
import en from "./locales/en"


function App() {
  const [language, setLanguage] = useState("pt");
  const translations = language === "pt" ? pt : en

  return (
    <>
      <NavBar
        translations = {translations}
        laguage = {language}
        setLanguage = {setLanguage}
      />
    </>
  )
}

export default App