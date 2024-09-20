
import './App.css'
import { Firstsection } from './assets/components/Firstsection'
import { Header } from './assets/components/Header'
import Contact from './components/Contact.jsx'; 
import Footer from './components/Footer.jsx';  

function App() {

  return (
    <>
      <Header />
      <Firstsection />
//     ----------------------
//     MAIN
//     ----------------------
      <div className="app-container">
      <Contact />
      <Footer />
    </>
  )
}

export default App;
